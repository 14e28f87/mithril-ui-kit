---
name: mithril-ui-kit-docs
description: "mithril-ui-kit のドキュメント作成標準。Use when: docs新規作成、docs更新、UIコンポーネント追加に伴う説明追加、API Reference更新、Usage作成、live demo実装、docs導線更新。"
---

# mithril-ui-kit ドキュメント作成スキル

このスキルは、mithril-ui-kit のドキュメントを一貫した品質で作成するための標準手順。
主目的はドキュメント作成であり、live demo はドキュメント品質を担保するための必須要素として実装する。

## いつ使うか

- 新規コンポーネントの docs ページを作る
- 既存コンポーネントの docs を更新する
- UI 実装変更に追従して API Reference を更新する
- Usage 例を追加・整理する
- docs 導線（index/sidebar/nav）を更新する

## 目的

1. 読んで使い方が分かる日本語ドキュメントを作る
2. 実装と docs の API 差分をなくす
3. live demo により挙動確認可能なページにする

## 先に確認する正本

1. src/components/index.ts（公開 export）
2. 対象コンポーネント実装（現行 API）
3. .github/skills/mithril-ui-kit-docs/samples/Accordion.sample.md（ページ構成の基準）
4. docs/.vitepress/theme/MithrilDemo.vue（demo 表示基盤）

dist や古い docs 記述を正本にしない。source を正本とする。

## ドキュメント標準構成

1. # ComponentName
2. ## 概要
3. ## Usage 使用例
4. ## API Reference
5. 必要に応じて ## アクセシビリティ / 補足

## 必須ルール

- 説明文は日本語で書く
- 概要は 2 から 4 文で、用途と価値を先に説明する
- Usage は動く例を中心にする
- API Reference は現行実装に厳密一致させる
- compound component は Subcomponents 表を入れる
- UI コンポーネント docs には live demo を必ず含める

## live demo 実装ルール

- demo 正本は docs/demos/<component-kebab-case>/*.tsx
- setup(el: HTMLElement): void を export する
- md 側では setup と ?raw を同じ tsx から import する
- 実行コードと表示コードを二重管理しない
- import は mithril-ui-kit を使う（src 直参照しない）
- 表示確認には Playwright MCP を用いて確認を行う。
  - demo の主要操作（クリック・入力・開閉など）が成功することを確認する。
  - console error / pageerror がないことを確認する。
  
## 作業手順

1. source から API を確認する
2. docs/<Component>.md の章立てを作る
3. docs/demos/<component>/ に demo tsx を作る
4. md で MithrilDemo に接続する
5. Usage と API Reference を記述する
6. 必要に応じて docs/.vitepress/config.mts と docs/index.md を更新する
7. docs:dev で表示確認する。
9. docs:build で最終確認する。

## 検証（必須）

以下の検証は Playwright MCP を用いて自動化・半自動化して実施する。

1. demo preview が表示される
2. 主操作が最低 1 回成功する
3. console error / pageerror がない
4. API 名が source と一致している
5. build と docs:build が通る

## 完了条件

次を満たした場合に docs 作業完了とする。

1. 本文（概要・Usage・API）が完成している
2. live demo が動作する
3. 導線更新が必要な場合に反映済み
4. source 実装との差分がない

## 参考

- docs 品質の基準: .github/skills/mithril-ui-kit-docs/samples/Accordion.sample.md
