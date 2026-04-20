# Stack

<script setup>
import { setup as basicDemo } from './demos/stack/basic'
import basicCode from './demos/stack/basic.tsx?raw'
</script>

## 概要

`Stack` は子要素を一列に並べるためのレイアウトコンポーネントです。`separator` を使うと要素間に区切りを挿入でき、`HStack` と `VStack` は `direction` を固定したショートカットとして使えます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Stack Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `"column"` | 並び方向です |
| `gap` | `string \| number` | — | 子要素間の間隔です |
| `align` | `string` | — | `align-items` を指定します |
| `justify` | `string` | — | `justify-content` を指定します |
| `wrap` | `"wrap" \| "nowrap" \| "wrap-reverse"` | — | 折り返し挙動です |
| `separator` | `m.Children` | — | 子要素の間に挿入する区切り要素です |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### Aliases

| Component | Description |
| --- | --- |
| `Stack` | 任意方向を選べる基本コンポーネントです |
| `HStack` | `direction="row"` を固定したショートカットです |
| `VStack` | `direction="column"` を固定したショートカットです |