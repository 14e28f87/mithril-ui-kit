/**
 * SCSS ファイルを src/components から dist/components へコピーするスクリプト。
 * Windows / Linux / macOS いずれでも動作する。
 * tsx scripts/copy-styles.ts で実行する。
 */
import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const SRC_DIR = "src/components";
const DEST_DIR = "dist/components";

// コピー先ディレクトリが存在しない場合は作成する
mkdirSync(DEST_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => f.endsWith(".scss"));

for (const file of files) {
  copyFileSync(join(SRC_DIR, file), join(DEST_DIR, file));
  console.log(`Copied: ${file}`);
}

console.log(`Done: ${files.length} file(s) copied to ${DEST_DIR}`);
