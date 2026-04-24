---
name: mithril-ui-kit-standards
description: "mithril-ui-kit の UI コンポーネント実装標準。Use when: UIコンポーネントの追加、作成、改良、変更、修正、リファクタ、既存UIの挙動変更、CSS Modules対応、Bootstrap互換フォールバック、docs必須更新、live demo必須実装。"
---

# mithril-ui-kit UI 実装標準スキル

このスキルは、mithril-ui-kit における UI コンポーネント作業の標準手順を定義する。
UI コンポーネントの作業では、実装と同時に docs と live demo を必ず更新する。

## いつ使うか

- 新しい UI コンポーネントを追加する
- 既存 UI コンポーネントを作り直す
- 既存 UI コンポーネントを改良・変更・修正する
- UI の見た目、API、挙動、アクセシビリティを調整する
- CSS 設計や Bootstrap 互換フォールバックを見直す

上記のいずれかに該当する場合は、このスキルを必ず適用する。

## 最重要ルール

1. UI 実装だけで完了にしない。docs と live demo の更新まで必須
2. docs 作業では mithril-ui-kit-docs スキルを必ず併用する
3. Bootstrap 未読込でも破綻しない実装を維持する
4. 公開 API 変更時は docs の API Reference を同時更新する
5. 既存公開 API 互換は慎重に扱う

## 実装標準

### CSS とスタイル

- コンポーネント固有スタイルは ComponentName.module.scss を基本にする
- TSX 側では import styles from "./ComponentName.module.scss" を使う
- 値指定は var(--bs-*, var(--muk-*, fallback)) の 2 段フォールバックを基本にする
- Bootstrap class 依存は増やさない
- DOM 操作の識別には data-* 属性を使い、CSS Modules のハッシュ class を識別子にしない

### Mithril 実装

- JSX ファーストで記述する
- view() は可能な限り JSX で書く
- state 更新は Mithril 流儀で扱い、必要に応じて m.redraw() を使う
- React Hooks 記法は使わない

### 依存管理

- CDN 依存を増やさず npm バンドルを使う
- docs/demo でも import は mithril-ui-kit を使う

## 必須ワークフロー

1. 対象コンポーネントの現行 API と利用箇所を確認する
2. src/components 側の実装を更新する
3. 必要なら .module.scss を追加または更新する
4. docs/<Component>.md を作成または更新する
5. docs/demos/<component-kebab-case>/ に live demo tsx を作成または更新する
6. docs 導線を更新する（必要時: docs/.vitepress/config.mts, docs/index.md）
7. docs スキルのチェック項目で検証する
8. build と docs:build を通して最終確認する

## 完了条件

次をすべて満たした場合のみ完了とする。

1. UI 実装が完了している
2. docs 本文が更新されている
3. live demo が更新されている
4. API 変更が docs に反映されている
5. docs ルートで表示確認できる
6. build と docs:build が通る

## 関連スキル

- docs 作成標準: ../mithril-ui-kit-docs/SKILL.md
- コメント方針: ../typescript-code-comments/SKILL.md
