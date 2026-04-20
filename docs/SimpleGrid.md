# SimpleGrid

<script setup>
import { setup as basicDemo } from './demos/simple-grid/basic'
import basicCode from './demos/simple-grid/basic.tsx?raw'
</script>

## 概要

`SimpleGrid` は等幅グリッドを手早く作るための軽量コンポーネントです。固定カラム数の指定だけでなく、`minChildWidth` による自動折り返しもサポートします。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### SimpleGrid Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `number` | — | 固定のカラム数を指定します |
| `minChildWidth` | `string` | — | `repeat(auto-fit, minmax(...))` を使ったレスポンシブ列幅です |
| `gap` | `string \| number` | — | 行列共通の間隔です |
| `rowGap` | `string \| number` | — | 行間を指定します |
| `columnGap` | `string \| number` | — | 列間を指定します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |