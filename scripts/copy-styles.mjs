import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * dist/components に SCSS を複製する。
 * PowerShell 依存を避けるため、CI でも動く Node.js 実装にしている。
 */
const rootDir = dirname(fileURLToPath(import.meta.url));
const srcDir = join(rootDir, "..", "src", "components");
const distDir = join(rootDir, "..", "dist", "components");

mkdirSync(distDir, { recursive: true });

for (const entry of readdirSync(srcDir)) {
  if (!entry.endsWith(".scss")) {
    continue;
  }

  copyFileSync(join(srcDir, entry), join(distDir, entry));
}

console.log("SCSS files copied to dist/components");
