# Flex

<script setup>
import { setup as basicDemo } from './demos/flex/basic'
import basicCode from './demos/flex/basic.tsx?raw'
</script>

## 概要

`Flex` は Flexbox ベースのレイアウトコンポーネントです。`direction`、`align`、`justify`、`gap` を declarative に指定でき、`Spacer` を使うと空き領域の押し出しも簡単に行えます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Flex Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"row" \| "row-reverse" \| "column" \| "column-reverse"` | — | フレックス方向です |
| `align` | `string` | — | `align-items` を指定します |
| `justify` | `string` | — | `justify-content` を指定します |
| `wrap` | `"wrap" \| "nowrap" \| "wrap-reverse"` | — | 折り返し挙動です |
| `basis` | `string` | — | `flex-basis` を指定します |
| `grow` | `number \| string` | — | `flex-grow` を指定します |
| `shrink` | `number \| string` | — | `flex-shrink` を指定します |
| `gap` | `string \| number` | — | 子要素間の間隔です |
| `inline` | `boolean` | `false` | `inline-flex` として描画します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Spacer` | 残りの空き領域を埋めて、後続要素を端へ押し出します |