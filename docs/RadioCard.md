# RadioCard

<script setup>
import { setup as basicDemo } from './demos/radio-card/basic'
import { setup as horizontalDemo } from './demos/radio-card/horizontal'

import basicCode from './demos/radio-card/basic.tsx?raw'
import horizontalCode from './demos/radio-card/horizontal.tsx?raw'
</script>

## 概要

`RadioCard` はカード単位で単一選択を行うコンポーネントです。モード選択やプラン比較のように、選択肢ごとに説明を持たせたい場面に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 横並び

<MithrilDemo :setup="horizontalDemo" :code="horizontalCode" />

## API Reference

### RadioCard.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"surface" \| "subtle" \| "outline" \| "solid"` | `"outline"` | カードの見た目です |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | カードサイズです |
| `value` | `string` | — | 現在の選択値です |
| `onValueChange` | `(value: string) => void` | — | 値変更時に呼ばれます |
| `name` | `string` | — | ラジオ入力の name 属性です |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | 配置方向です |
| `class` | `string` | — | 追加クラスです |

### RadioCard.Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 項目の識別値です |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `RadioCard.Label` | グループ見出しです |
| `RadioCard.Item` | 1 件の選択カードです |
| `RadioCard.ItemControl` | 左右レイアウトの主要領域です |
| `RadioCard.ItemContent` | 本文ラッパーです |
| `RadioCard.ItemText` | 項目名です |
| `RadioCard.ItemDescription` | 補足文です |
| `RadioCard.ItemIndicator` | 選択状態の丸表示です |
| `RadioCard.ItemAddon` | 追加表示領域です |