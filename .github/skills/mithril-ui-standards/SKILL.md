---
name: mithril-ui-standards
description: "mithril-ui-kit の UI コンポーネントや docs demo を新規作成・修正する。Use when: UIコンポーネント作成、CSS Modules、.module.scss、Bootstrap 5 併用互換、--bs-* フォールバック、--muk-* フォールバック、Playwright MCP で動作確認"
---

# Mithril UI 標準スキル

このリポジトリで UI コンポーネントを作るときの共通ルール。
特に mithril-ui-kit 本体と docs / demo の UI 作業で使う。

## いつ使うか

- 新しい UI コンポーネントを追加する
- 既存コンポーネントを CSS Modules 化する
- Bootstrap 5 依存を減らしつつ見た目互換を維持する
- Modal / Offcanvas / Table / Form などの UI を調整する
- Playwright MCP で見た目や操作確認まで行いたい

## 必須ルール

### 1. スタイルは .module.scss を基本にする

- コンポーネント固有スタイルは必ず ComponentName.module.scss に置く
- TSX 側では import styles from "./ComponentName.module.scss" を使う
- Bootstrap の utility class に寄せず、まずは styles.xxx で閉じた実装にする
- グローバル class を増やすのは、既存 API 互換のために本当に必要な場合だけ

### 2. Bootstrap 5 があってもなくても破綻しないこと

- mithril-ui-kit では Bootstrap 5 の CSS を未読込でもレイアウトが崩れないようにする
- Bootstrap 5 の CSS が読まれている場合は、その値を優先できる設計にする
- 値の指定は次の 2 段フォールバックを基本形にする

```scss
color: var(--bs-primary, var(--muk-primary, #0d6efd));
border-color: var(--bs-border-color, var(--muk-border-color, #dee2e6));
box-shadow: 0 0 0 0.25rem var(--bs-focus-ring-color, var(--muk-focus-ring-color, rgba(13, 110, 253, 0.25)));
```

- --bs-* があればそれを使い、なければ --muk-*、最後にハードコード値へ落とす

### 3. Bootstrap class への依存は増やさない

- btn、table、form-control など既存 API として残す必要があるもの以外は、Bootstrap class 前提で組まない
- レイアウト用の d-flex、gap-*、text-end などは、必要なら CSS Modules 側に移す
- どうしてもグローバル互換 class が必要なら dist/components/BootstrapCompat.scss 側で管理する

### 4. DOM 操作は CSS Modules の class 名に依存しない

- querySelector、classList、closest などで要素を探すときは data-* 属性を使う
- CSS Modules のハッシュ化 class 名を DOM 操作の識別子として使わない

```tsx
<div class={styles.offcanvas} data-offcanvas="" />
```

### 5. CDN ではなく npm バンドルを使う

- bootstrap-icons は npm import で扱う
- animate.css も npm import で扱う
- index.html に CDN を足さない

### 6. Mithril の書き方は JSX ファースト

- /** @jsx m */ を先頭に置く
- view() は JSX で書く
- 動的コンポーネントのような例外を除き、m() 直接呼び出しを増やさない

## 実装手順

1. 対象コンポーネントの現在の Bootstrap class 依存を洗い出す
2. .module.scss を作成し、見た目・配置・状態 class をローカル化する
3. 色や境界線や余白で Bootstrap 由来の値を使いたい箇所は var(--bs-*, var(--muk-*, fallback)) に置き換える
4. DOM 操作がある場合は data-* 属性ベースに置き換える
5. CDN 依存があれば npm import に寄せる
6. 変更後に対象 package を build する
7. UI 変更がある場合は Playwright MCP で実画面確認する

## Playwright MCP の使い方

- UI の変更では Playwright MCP の利用を許可された前提で進めてよい
- build や lint が通っても、表示崩れや runtime error は残りうるので実画面確認を行う
- 少なくとも次の項目を確認する
- 主要導線の表示崩れがない
- ボタン、開閉、モーダル、オフキャンバスなどの操作が通る
- 追加した class や animation が想定どおり効いている
- console error と pageerror が出ていない
- 変更が大きい場合はスクリーンショットや accessibility snapshot も活用する

特に mithril-ui-kit の docs / demo 更新時は以下を必須にする:

1. 対象の VitePress route を開く
2. demo preview が実際に mount されていることを確認する
3. 必要なら sidebar の複数 route を巡回して回帰を確認する
4. 不具合が出たら markdown ではなく source 実装を正として docs 側を修正する

## パッケージ別メモ

### mithril-ui-kit

- ライブラリなので、外部 Bootstrap CSS 未読込でも成立することを優先する
- 既存公開 API を壊さない
- 必要に応じて docs や demo も更新する
- docs や demo を触った場合は、VitePress の live page を Playwright MCP で確認する

## チェックリスト

1. [ ] .module.scss を作成または更新した
2. [ ] Bootstrap 5 未読込でも成立する実装になっている
3. [ ] 必要な値が var(--bs-*, var(--muk-*, fallback)) になっている
4. [ ] DOM 操作が data-* 属性ベースになっている
5. [ ] CDN 依存を追加していない
6. [ ] 対象 package の build を実行した
7. [ ] UI 変更がある場合は Playwright MCP で console / pageerror まで確認した
8. [ ] docs / demo 変更時は live route の preview 表示も確認した

## 関連スキル

- コードコメント追加: [../code-comments/SKILL.md](../code-comments/SKILL.md)
- mithril-ui-kit docs のライブデモ追加: [../mithriluikit-docs-demo/SKILL.md](../mithriluikit-docs-demo/SKILL.md)
