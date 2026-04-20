import { execFileSync, execSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const BRANCH = "gh-pages";
const DIST_DIR = "docs/.vitepress/dist";
const COMMITTER_NAME = "github-copilot[bot]";
const COMMITTER_EMAIL = "github-copilot[bot]@users.noreply.github.com";

function runGit(args: string[], cwd: string): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

function runCommand(command: string, args: string[], cwd: string): void {
  if (command === "npm") {
    execSync(`${command} ${args.join(" ")}`, {
      cwd,
      stdio: "inherit"
    });
    return;
  }

  execFileSync(command, args, {
    cwd,
    stdio: "inherit"
  });
}

function copyDistToWorktree(sourceDir: string, targetDir: string): void {
  for (const entry of readdirSync(sourceDir)) {
    cpSync(join(sourceDir, entry), join(targetDir, entry), {
      recursive: true,
      force: true
    });
  }

  writeFileSync(join(targetDir, ".nojekyll"), "\n", "utf8");
}

function main(): void {
  const repoRoot = runGit(["rev-parse", "--show-toplevel"], process.cwd());
  const distDir = resolve(repoRoot, DIST_DIR);
  const remoteUrl = runGit(["remote", "get-url", "origin"], repoRoot);

  console.log("docs をビルドしています...");
  runCommand("npm", ["run", "docs:build"], repoRoot);

  if (!existsSync(distDir)) {
    throw new Error(`docs build の出力先が見つかりません: ${distDir}`);
  }

  console.log("gh-pages 用の一時リポジトリを準備しています...");
  const worktreeDir = mkdtempSync(join(tmpdir(), "mithril-ui-kit-gh-pages-"));

  try {
    runCommand("git", ["init", "--initial-branch", BRANCH], worktreeDir);
    runCommand("git", ["remote", "add", "origin", remoteUrl], worktreeDir);

    console.log("gh-pages の内容を docs 出力で作成します...");
    copyDistToWorktree(distDir, worktreeDir);

    runCommand("git", ["add", "--all"], worktreeDir);

    const status = runGit(["status", "--porcelain"], worktreeDir);
    if (!status) {
      console.log("公開対象の差分がないため、push は不要です。");
      return;
    }

    const commitMessage = `docs: deploy ${new Date().toISOString()}`;
    runCommand(
      "git",
      [
        "-c",
        `user.name=${COMMITTER_NAME}`,
        "-c",
        `user.email=${COMMITTER_EMAIL}`,
        "commit",
        "-m",
        commitMessage
      ],
      worktreeDir
    );

    console.log("gh-pages に push しています...");
    runCommand("git", ["push", "origin", "HEAD:gh-pages", "--force"], worktreeDir);
    console.log("docs のデプロイが完了しました。");
  } finally {
    rmSync(worktreeDir, { recursive: true, force: true });
  }
}

main();
