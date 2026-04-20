# Breadcrumb

<script setup>
import { setup as basicDemo } from './demos/breadcrumb/basic'
import { setup as separatorDemo } from './demos/breadcrumb/separator'
import { setup as ellipsisDemo } from './demos/breadcrumb/ellipsis'
import { setup as sizesDemo } from './demos/breadcrumb/sizes'
import { setup as variantDemo } from './demos/breadcrumb/variant'

import basicCode from './demos/breadcrumb/basic.tsx?raw'
import separatorCode from './demos/breadcrumb/separator.tsx?raw'
import ellipsisCode from './demos/breadcrumb/ellipsis.tsx?raw'
import sizesCode from './demos/breadcrumb/sizes.tsx?raw'
import variantCode from './demos/breadcrumb/variant.tsx?raw'
</script>

## 概要

`Breadcrumb` は、サイトの階層構造内におけるページの位置を表示するためのパンくずリスト compound component です。

以下のサブコンポーネントで構成されます:

- `Breadcrumb.Root` — ルート `<nav>` 要素。variant / size / separator 設定を管理
- `Breadcrumb.List` — パンくずリストの `<ol>` コンテナ
- `Breadcrumb.Item` — 各パンくず項目の `<li>` 要素
- `Breadcrumb.Link` — ナビゲーションリンク
- `Breadcrumb.CurrentLink` — 現在のページ（`aria-current="page"` 付き）
- `Breadcrumb.Separator` — 項目間の区切り文字
- `Breadcrumb.Ellipsis` — 省略記号（中間階層を省略する場合）


## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### カスタムセパレーター

`separator` prop でデフォルトの区切り文字を変更できます。

<MithrilDemo :setup="separatorDemo" :code="separatorCode" />

### 省略記号付き

中間階層が多い場合は `Breadcrumb.Ellipsis` で省略できます。

<MithrilDemo :setup="ellipsisDemo" :code="ellipsisCode" />

### サイズバリエーション

`size` prop で小さい / 標準 / 大きいサイズを選べます。

<MithrilDemo :setup="sizesDemo" :code="sizesCode" />

### variant

`variant="underline"` でリンクにアンダーライン装飾を付けます。

<MithrilDemo :setup="variantDemo" :code="variantCode" />


## API Reference

### Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"underline" \| "plain"` | `"plain"` | 外観バリエーション。`underline` はリンクにホバー時アンダーラインを付けます。`plain` は装飾なしのシンプルな表示 |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | コンポーネントのサイズ。フォントサイズと余白が変わります |
| `separator` | `string \| m.Children` | `"/"` | 項目間に表示するセパレーター文字。文字列や Mithril vnode を指定できます |
| `class` | `string` | — | ルート `<nav>` 要素に付与する追加 CSS クラス |
| `style` | `Record<string, string>` | — | ルート `<nav>` 要素に付与するインラインスタイル |

### Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | `<li>` 要素に付与する追加 CSS クラス |
| `style` | `Record<string, string>` | — | `<li>` 要素に付与するインラインスタイル |

### Link Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | `"#"` | 遷移先 URL。`/` で始まるパスは `m.route.set()` によるクライアントサイドナビゲーションになります |
| `class` | `string` | — | `<a>` 要素に付与する追加 CSS クラス |
| `style` | `Record<string, string>` | — | `<a>` 要素に付与するインラインスタイル |

### CurrentLink Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | `<span>` 要素に付与する追加 CSS クラス |
| `style` | `Record<string, string>` | — | `<span>` 要素に付与するインラインスタイル |

## アクセシビリティ

- ルート要素に `aria-label="Breadcrumb"` を設定
- 現在のページ要素に `aria-current="page"` を設定
- セパレーターは `aria-hidden="true"` でスクリーンリーダーから隠蔽

