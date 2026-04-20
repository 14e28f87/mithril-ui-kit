# ColorSwatch

<script setup>
import { setup as basicDemo } from './demos/color-swatch/basic'
import basicCode from './demos/color-swatch/basic.tsx?raw'
</script>

## 概要

`ColorSwatch` は単色の見本を表示するためのコンポーネントです。`ColorSwatchMix` を使うと複数色のグラデーション見本も表示でき、テーマ切り替えやカラーパレット選択の補助表示に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### ColorSwatch Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | CSS 色値です |
| `size` | `"2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | スウォッチサイズです |
| `rounded` | `boolean` | `false` | 丸みを強くした見た目です |
| `class` | `string` | — | 追加クラスです |

### ColorSwatchMix Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | `string[]` | — | グラデーション化する色配列です |
| `size` | `"2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | スウォッチサイズです |
| `class` | `string` | — | 追加クラスです |