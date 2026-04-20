# ProgressCircle

<script setup>
import { setup as basicDemo } from './demos/progress-circle/basic'
import basicCode from './demos/progress-circle/basic.tsx?raw'
</script>

## 概要

`ProgressCircle` は円形の進捗インジケーターです。限られたスペースで完了率を示したいカードや KPI 表示に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### ProgressCircle.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number \| null` | — | 現在値です。`null` で不確定状態になります |
| `min` | `number` | `0` | 最小値です |
| `max` | `number` | `100` | 最大値です |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | 円のサイズです |
| `colorPalette` | `string` | `"blue"` | カラー CSS 変数へ反映する色です |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `ProgressCircle.Circle` | SVG 円全体のラッパーです |
| `ProgressCircle.Track` | 背景トラックです |
| `ProgressCircle.Range` | 進行部分の円弧です |
| `ProgressCircle.ValueText` | 中央の値表示です |