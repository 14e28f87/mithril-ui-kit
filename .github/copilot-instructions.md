# Project Guidelines — mithril-ui-kit

## Overview

このリポジトリは、旧モノレポから切り出した standalone 版の Mithril.js UI コンポーネントライブラリです。
現在の正本はこのリポジトリ自身であり、`packages/*` 前提のモノレポとして扱わないでください。

- 正式名称: `mithril-ui-kit`
- 公式 import 名: `mithril-ui-kit`
- リポジトリ: https://github.com/14e28f87/mithril-ui-ki

## Language & Conventions

- **言語:** TypeScript (strict mode, ES2020, ESM)
- **日本語:** コメント・ドキュメントは日本語で書く
- **UI フレームワーク:** Mithril.js。React Hooks は使わない
  - `jsxFactory: "m"`, `jsxFragment: "m.fragment"`
  - 描画は JSX ファーストで書く
- **スタイル:** SCSS + Bootstrap 5 互換。CSS Modules を優先する
- **命名統一:** docs・サンプル・コメント・import は `mithril-ui-kit` に統一する

## Coding Style（コーディング方針）

- **JSX ファースト:** `view()` など描画部分は JSX を優先する
- **非同期処理は async/await:** `.then().catch()` より `async/await` + `try/catch` を使う
- **lodash-es を積極活用:** 汎用ユーティリティは自前実装より lodash-es を優先する
- **Bootstrap 非依存でも成立:** `var(--bs-*, var(--muk-*, fallback))` の 2 段フォールバックを基本にする
- **コメント必須:** 新規コンポーネントや公開 API には日本語 JSDoc を付ける

## File Structure Patterns

```
src/                 # TypeScript ソースコード
docs/                # VitePress ドキュメントとデモ
.github/skills/      # Copilot 用スキル定義
dist/                # ビルド出力（git 管理外）
package.json
```

## Build & Dev Commands

```bash
# 依存関係インストール
npm install

# ライブラリをビルド
npm run build

# TypeScript watch
npm run watch

# ドキュメントサイト
npm run docs:dev      # http://localhost:6172
npm run docs:build
npm run docs:preview
```

## Mithril.js Specific Notes

- **Mithril は React ではない。** `useState`, `useEffect` は使わない
- ライフサイクル: `oninit`, `oncreate`, `onupdate`, `onbeforeremove`, `onremove`
- 仮想 DOM: `m("div.class", { attrs }, children)` または JSX
- 必要に応じて `m.redraw()` を明示的に呼ぶ

## Important Gotchas

- ビルドスクリプトには Windows PowerShell を使う SCSS コピー処理が含まれる
- docs の live demo は `docs/.vitepress/theme/MithrilDemo.vue` を正本として扱う
- docs / demo の import 名は必ず `mithril-ui-kit` にする
- テストフレームワークは未導入。必要なら Vitest または Playwright を提案する

## Documentation

- ドキュメントの入口: [docs/index.md](docs/index.md)
- 導入方法: [docs/installation.md](docs/installation.md)
- スキル定義: [.github/skills](.github/skills)

古い monorepo 前提の説明・パス・コマンドが残っていたら、この standalone repo の構成に合わせて更新してください.
