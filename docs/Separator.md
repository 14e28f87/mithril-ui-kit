# Separator

<script setup>
import { setup as basicDemo } from './demos/separator/basic'
import basicCode from './demos/separator/basic.tsx?raw'
</script>

## 概要

`Separator` はセクションや要素群の区切りを視覚的に示すコンポーネントです。横線だけでなく、`orientation="vertical"` による縦区切りやラベル付き区切りもサポートします。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Separator Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"solid" \| "dashed" \| "dotted"` | `"solid"` | 線種を切り替えます |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"sm"` | 線の太さです |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 区切りの方向です |
| `label` | `string` | — | 中央に表示するラベルです |
| `labelPlacement` | `"start" \| "center" \| "end"` | `"center"` | ラベル位置です |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `class` | `string` | — | 追加クラスです |