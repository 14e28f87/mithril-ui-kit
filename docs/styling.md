# スタイリングとテーマ設定

## 概要

mithril-ui-kit の多くの SCSS は、次の優先順位で値を解決します。

1. `--bs-*`
2. `--muk-*`
3. SCSS 内の固定値

```scss
color: var(--bs-primary, var(--muk-primary, #0d6efd));
```

このため、Bootstrap CSS を読み込んでいる環境では `--bs-*` が最優先です。Bootstrap を使わない環境では `--muk-*` を定義すると、同じ考え方で見た目を調整できます。

現時点では、source に共通 theme token 一覧ファイルはありません。実際にどの変数が使われているかは `src/components/*.scss` を正として追う設計です。

## 推奨するカスタマイズ順

1. 全体テーマは `--bs-*` または `--muk-*` を上書きする
2. 画面単位でテーマを切り替える場合は、ラッパー要素に CSS 変数を定義する
3. コンポーネント固有の見た目は、そのコンポーネント専用 CSS 変数がある場合だけ個別に上書きする
4. CSS Modules の内部 class 名や `--btn-accent` のような module 内変数には依存しない

`--btn-accent` や `--alert-accent` のような値は、各 module の内部で再計算に使っている実装詳細です。利用側のテーマ API としては、まず `--bs-*` / `--muk-*` を使うほうが安全です。

## 方法 1. Bootstrap CSS を読み込んでいる場合

Bootstrap 併用時は `--bs-*` が先に解決されるため、全体テーマを変えたいときは `--bs-*` を優先して定義します。

```css
:root {
  --bs-primary: #0f766e;
  --bs-primary-text-emphasis: #134e4a;
  --bs-primary-bg-subtle: #ccfbf1;
  --bs-primary-border-subtle: #99f6e4;

  --bs-success: #15803d;
  --bs-danger: #b91c1c;
  --bs-warning: #d97706;
  --bs-info: #0891b2;

  --bs-body-bg: #fcfcf9;
  --bs-body-color: #1f2937;
  --bs-secondary-color: #6b7280;
  --bs-secondary-bg: #f3f4f6;
  --bs-tertiary-bg: #f8fafc;
  --bs-border-color: #d6d3d1;

  --bs-border-radius: 0.75rem;
  --bs-border-radius-sm: 0.5rem;
  --bs-border-radius-lg: 1rem;
  --bs-focus-ring-color: rgba(15, 118, 110, 0.25);
}
```

`Button`、`Badge`、`Accordion`、`Card`、`TagsInput` のようなコンポーネントは、この系統の変数を広く参照します。

Bootstrap CSS を読み込んでいる環境で `--muk-*` だけを変えても、Bootstrap 側の `--bs-*` が勝つことがあります。併用時は `--bs-*` を主に調整し、必要に応じて `--muk-*` も同じ値にそろえるのが安全です。

## 方法 2. Bootstrap なしで `--muk-*` を定義する

Bootstrap を使わない場合は、`--muk-*` を利用側の CSS で定義します。

```css
:root {
  --muk-primary: #0f766e;
  --muk-primary-hover: #115e59;
  --muk-primary-bg-subtle: #ccfbf1;
  --muk-primary-text-emphasis: #134e4a;
  --muk-primary-border-subtle: #99f6e4;

  --muk-success: #15803d;
  --muk-danger: #b91c1c;
  --muk-warning: #d97706;
  --muk-info: #0891b2;

  --muk-body-bg: #ffffff;
  --muk-body-color: #111827;
  --muk-secondary-color: #6b7280;
  --muk-secondary-bg: #f3f4f6;
  --muk-tertiary-bg: #f8fafc;
  --muk-subtle-bg: #f8fafc;
  --muk-border-color: #d1d5db;

  --muk-border-radius: 0.75rem;
  --muk-border-radius-sm: 0.5rem;
  --muk-border-radius-lg: 1rem;
  --muk-font-size-base: 1rem;
  --muk-line-height: 1.6;
  --muk-focus-ring-color: rgba(15, 118, 110, 0.25);
  --muk-box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}
```

Bootstrap 非依存で theme を持たせたい場合の基本形はこの方法です。変数名は Bootstrap に寄せてあるので、将来的に Bootstrap 併用へ切り替えるときも考え方をそろえやすくなります。

## 方法 3. 画面やコンテナ単位でスコープする

CSS custom properties ベースなので、画面ごとに theme を切り替えることもできます。

```css
.dashboardTheme {
  --bs-primary: #7c3aed;
  --muk-primary: #7c3aed;
  --bs-primary-bg-subtle: #ede9fe;
  --muk-primary-bg-subtle: #ede9fe;
  --bs-border-radius: 1rem;
  --muk-border-radius: 1rem;
  --bs-body-bg: #faf5ff;
  --muk-body-bg: #faf5ff;
}
```

```tsx
<div class="dashboardTheme">
  <Button>保存</Button>
  <TagsInput.Root />
</div>
```

Bootstrap を読み込んでいる環境では、スコープ内でも `--bs-*` を一緒に定義しておくほうが意図どおりにそろいます。

## よく使うトークン

| 用途 | よく使う変数 | 主に影響する箇所 |
| --- | --- | --- |
| アクセント色 | `--bs-primary`, `--muk-primary`, `--muk-primary-hover` | Button, Badge, Checkbox, Tabs, Steps |
| サブトーン | `--bs-primary-bg-subtle`, `--muk-primary-bg-subtle`, `--bs-primary-text-emphasis`, `--muk-primary-text-emphasis`, `--bs-primary-border-subtle`, `--muk-primary-border-subtle` | subtle / surface 系 variant |
| ステータス色 | `--bs-success`, `--muk-success`, `--bs-danger`, `--muk-danger`, `--bs-warning`, `--muk-warning`, `--bs-info`, `--muk-info` | Alert, validation, status 表現 |
| 面と文字 | `--bs-body-bg`, `--muk-body-bg`, `--bs-body-color`, `--muk-body-color`, `--bs-secondary-color`, `--muk-secondary-color` | Card, Modal, Offcanvas, Accordion, TagsInput |
| 補助背景 | `--bs-secondary-bg`, `--muk-secondary-bg`, `--bs-tertiary-bg`, `--muk-tertiary-bg`, `--muk-subtle-bg` | disabled, hover, subtle variant, tag 背景 |
| 枠線と角丸 | `--bs-border-color`, `--muk-border-color`, `--bs-border-radius`, `--muk-border-radius`, `--bs-border-radius-sm`, `--muk-border-radius-sm`, `--bs-border-radius-lg`, `--muk-border-radius-lg` | フォーム系、パネル系全般 |
| タイポとフォーカス | `--muk-font-size-base`, `--muk-line-height`, `--bs-focus-ring-color`, `--muk-focus-ring-color`, `--muk-box-shadow` | classic 系、Button、Card など |

特に `Button` や `Badge` は、単純な `primary` だけでなく `primary-bg-subtle` / `primary-text-emphasis` / `primary-border-subtle` の3点も定義すると整いやすくなります。

## コンポーネント固有の CSS 変数

一部コンポーネントは、共通 token とは別に専用 CSS 変数を持っています。

```css
:root {
  --modal-backdrop-bg: rgba(15, 23, 42, 0.6);
  --offcanvas-backdrop-bg: rgba(15, 23, 42, 0.55);
}

.dangerCheckbox {
  --checkbox-color: #b91c1c;
}
```

- `--modal-backdrop-bg`: `Modal` の backdrop 色
- `--offcanvas-backdrop-bg`: `Offcanvas` の backdrop 色
- `--checkbox-color`: `Checkbox` のチェック時アクセント色

この種の変数は共通 theme token ではないため、必要なコンポーネントにだけ限定して使うのが向いています。

## 現状の注意点

すべてのスタイルが完全に token 化されているわけではありません。たとえば `TagsInput` の focus ring は現状固定の `rgba(13, 110, 253, 0.25)` を使っており、まだ `--muk-focus-ring-color` には乗っていません。

そのため、全コンポーネントで完全に同じ theme 追従を求める場合は、必要に応じて該当 SCSS の token 化を追加してください。このページは「現時点の source 実装で、そのまま効くカスタマイズ方法」をまとめたものです。

## 実装を確認したいとき

より細かい変数の利用状況は、`src/components/*.scss` で `--muk-` や `--bs-` を検索すると確認できます。source が正本なので、docs より先に SCSS を見るのが確実です。