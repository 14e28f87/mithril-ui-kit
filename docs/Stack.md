# Stack

<script setup>
import { setup as basicDemo } from './demos/stack/basic'
import basicCode from './demos/stack/basic.tsx?raw'

import { setup as stackSeparatorDemo } from './demos/stack/stack-separator'
import stackSeparatorCode from './demos/stack/stack-separator.tsx?raw'

import { setup as hstackDemo } from './demos/stack/hstack'
import hstackCode from './demos/stack/hstack.tsx?raw'

import { setup as vstackDemo } from './demos/stack/vstack'
import vstackCode from './demos/stack/vstack.tsx?raw'

import { setup as responsiveDemo } from './demos/stack/responsive'
import responsiveCode from './demos/stack/responsive.tsx?raw'
</script>

## 概要

`Stack` は子要素を縦方向または横方向に一列に並べるレイアウトコンポーネントです。`separator` prop に `StackSeparator` を渡すと、Stack の方向（縦/横）に合わせてセパレーターが自動的に向きを変えます。`direction` にオブジェクトを渡すとブレークポイントごとに方向を切り替えるレスポンシブ対応も可能です。

## Usage 使用例

### 基本

縦方向（`column`）に子要素を並べます。`gap` で要素間の余白を指定します。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### StackSeparator

`separator` prop に `<StackSeparator />` を渡すと、Stack の方向に合わせてセパレーターの向きが自動で切り替わります。縦方向 Stack では横線、横方向 Stack では縦線が挿入されます。

<MithrilDemo :setup="stackSeparatorDemo" :code="stackSeparatorCode" />

### HStack

`HStack` は `direction="row"` を固定したショートカットです。子要素を横方向に並べます。

<MithrilDemo :setup="hstackDemo" :code="hstackCode" />

### VStack

`VStack` は `direction="column"` を固定したショートカットです。子要素を縦方向に並べます。

<MithrilDemo :setup="vstackDemo" :code="vstackCode" />

### Responsive Direction

`direction` にオブジェクトを渡すとブレークポイントごとに方向を切り替えられます。Bootstrap 5 互換のブレークポイント（`sm`/`md`/`lg`/`xl`/`xxl`）に対応しています。

<MithrilDemo :setup="responsiveDemo" :code="responsiveCode" />

## API Reference

### Stack Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse" \| ResponsiveDirection` | `"column"` | 並び方向。オブジェクト指定でレスポンシブ対応 |
| `gap` | `string \| number` | — | 子要素間の間隔 |
| `align` | `string` | — | `align-items` の値 |
| `justify` | `string` | — | `justify-content` の値 |
| `wrap` | `"wrap" \| "nowrap" \| "wrap-reverse"` | — | 折り返し挙動 |
| `separator` | `m.Children` | — | 子要素の間に挿入する区切り要素。`StackSeparator` を渡すと方向を自動注入 |
| `as` | `string` | `"div"` | 描画要素タグ |
| `class` | `string` | — | 追加クラス |
| `style` | `Record<string, string> \| string` | — | インラインスタイル |

### ResponsiveDirection

`direction` にオブジェクトを渡すときのブレークポイント指定。

| キー | 適用幅 | 値 |
| --- | --- | --- |
| `base` | 全幅（モバイルファースト） | `"row" \| "column" \| "row-reverse" \| "column-reverse"` |
| `sm` | ≥576px | 同上 |
| `md` | ≥768px | 同上 |
| `lg` | ≥992px | 同上 |
| `xl` | ≥1200px | 同上 |
| `xxl` | ≥1400px | 同上 |

### StackSeparator Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `_direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `"column"` | Stack から自動注入される方向（手動指定も可） |
| `class` | `string` | — | 追加クラス |
| `style` | `Record<string, string> \| string` | — | インラインスタイル |

### Aliases

| Component | Description |
| --- | --- |
| `Stack` | 任意方向を選べる基本コンポーネント |
| `HStack` | `direction="row"` を固定したショートカット |
| `VStack` | `direction="column"` を固定したショートカット |
| `StackSeparator` | Stack の方向に合わせて向きが自動変化するセパレーター |
