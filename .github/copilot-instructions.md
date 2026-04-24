# Project Guidelines - mithril-ui-kit

## Overview

これは Mithril.js で動作する Web UI コンポーネント ライブラリです。

- 正式名称: mithril-ui-kit
- 公式 import 名: mithril-ui-kit
- リポジトリ: https://github.com/14e28f87/mithril-ui-ki

## Language & Conventions

- 言語: TypeScript (strict mode, ES2020, ESM)
- 日本語: コメント・ドキュメントは日本語で書く
- UI フレームワーク: Mithril.js。React Hooks は使わない
- jsxFactory: m, jsxFragment: m.fragment
- 描画は JSX ファーストで書く
- スタイル: SCSS + Bootstrap 5 互換。CSS Modules を優先する
- 命名統一: docs・サンプル・コメント・import は mithril-ui-kit に統一する

## Critical Workflow Rules

- UI コンポーネントの追加・作成・改良・変更・修正・リファクタでは、必ず mithril-ui-kit-standards スキルを基準に作業する
- UI コンポーネントを変更した場合、docs 更新は必須。省略して完了扱いにしない
- docs 更新時は、対象コンポーネントの live demo 実装を必須とする
- docs 作成・更新の具体手順は mithril-ui-kit-docs スキルを必ず参照する
- UI 実装だけ完了して docs と demo が未更新なら、タスクは未完了扱い

## Skill Activation Guide

- UI 実装全般（追加/作成/改良/変更/修正/リファクタ）: mithril-ui-kit-standards を適用する
- docs 作成・更新（概要/Usage/API Reference/live demo/導線更新）: mithril-ui-kit-docs を適用する
- TypeScript/TSX コメント追加（JSDoc、@example、公開 API コメント）: typescript-code-comments を適用する
- SCSS コメント追加（.module.scss の先頭コメント、セクション見出し、簡潔な補足）: scss-code-comments を適用する
- 複数領域にまたがる作業では、該当するスキルを併用する

## Coding Style

- JSX ファースト: view() など描画部分は JSX を優先する
- 非同期処理は async/await: then/catch より async/await + try/catch を使う
- lodash-es を積極活用: 汎用ユーティリティは自前実装より lodash-es を優先する
- Bootstrap 非依存でも成立: var(--bs-*, var(--muk-*, fallback)) の 2 段フォールバックを基本にする
- コメント必須: 新規コンポーネントや公開 API には日本語 JSDoc を付ける

## Required Deliverables For UI Changes

UI コンポーネント変更時は、最低限次を同一タスク内でそろえること。

1. src/components 側の実装更新
2. docs/<Component>.md の作成または更新
3. docs/demos/<component-kebab-case>/ の live demo tsx 作成または更新
4. docs/.vitepress/config.mts または docs/index.md の導線更新（必要時）
5. docs:dev で preview 動作確認、docs:build でビルド確認

## File Structure Patterns

src/                 # TypeScript ソースコード
docs/                # VitePress ドキュメントとデモ
.github/skills/      # Copilot 用スキル定義
dist/                # ビルド出力（git 管理外）
package.json

## Build & Dev Commands

npm install
npm run build
npm run watch
npm run docs:dev      # http://localhost:6172
npm run docs:build
npm run docs:preview

## Mithril.js Specific Notes

- Mithril は React ではない。useState, useEffect は使わない
- ライフサイクル: oninit, oncreate, onupdate, onbeforeremove, onremove
- 仮想 DOM: m("div.class", { attrs }, children) または JSX
- 必要に応じて m.redraw() を明示的に呼ぶ

## Important Gotchas

- ビルドの copy-styles スクリプトは tsx scripts/copy-styles.ts で実行されるため Windows / Linux / macOS いずれでも動作する
- docs の live demo は docs/.vitepress/theme/MithrilDemo.vue を正本として扱う
- docs / demo の import 名は必ず mithril-ui-kit にする
- テストフレームワークは未導入。Playwright MCP での確認とする

## Documentation

- ドキュメントの入口: docs/index.md
- 導入方法: docs/installation.md
- スキル定義: .github/skills

古い monorepo 前提の説明・パス・コマンドが残っていたら、この standalone repo の構成に合わせて更新してください。
