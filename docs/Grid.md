# Grid

<script setup>
import { setup as basicDemo } from './demos/grid/basic'
import basicCode from './demos/grid/basic.tsx?raw'
</script>

## 概要

`Grid` は CSS Grid レイアウトを宣言的に扱うコンポーネントです。`GridItem` と組み合わせると、列結合や行結合を props で記述できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Grid Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `templateColumns` | `string` | — | `grid-template-columns` を指定します |
| `templateRows` | `string` | — | `grid-template-rows` を指定します |
| `templateAreas` | `string` | — | `grid-template-areas` を指定します |
| `autoFlow` | `string` | — | `grid-auto-flow` を指定します |
| `autoRows` | `string` | — | `grid-auto-rows` を指定します |
| `autoColumns` | `string` | — | `grid-auto-columns` を指定します |
| `gap` | `string \| number` | — | 行列共通の間隔です |
| `rowGap` | `string \| number` | — | 行間を指定します |
| `columnGap` | `string \| number` | — | 列間を指定します |
| `inline` | `boolean` | `false` | `inline-grid` として描画します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### GridItem Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `colSpan` | `number \| string` | — | 指定列数ぶん横にまたがります |
| `rowSpan` | `number \| string` | — | 指定行数ぶん縦にまたがります |
| `colStart` | `number \| string` | — | 開始列を指定します |
| `colEnd` | `number \| string` | — | 終了列を指定します |
| `rowStart` | `number \| string` | — | 開始行を指定します |
| `rowEnd` | `number \| string` | — | 終了行を指定します |
| `area` | `string` | — | `grid-area` を直接指定します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `GridItem` | 行・列の span や開始位置を指定する子要素です |