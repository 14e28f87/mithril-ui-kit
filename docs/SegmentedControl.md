# SegmentedControl

<script setup>
import { setup as basicDemo } from './demos/segmented-control/basic'
import basicCode from './demos/segmented-control/basic.tsx?raw'
</script>

## 概要

`SegmentedControl` は複数の選択肢をボタン状に並べる単一選択コンポーネントです。ビュー切り替えやフィルター切り替えのように、即時反映されるモード選択に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### SegmentedControl.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | コントロールサイズです |
| `value` | `string` | — | 現在の選択値です |
| `onValueChange` | `(value: string) => void` | — | 値変更時に呼ばれます |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 配置方向です |
| `class` | `string` | — | 追加クラスです |

### SegmentedControl.Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 項目の識別値です |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `SegmentedControl.Item` | 1 件の選択肢です |
| `SegmentedControl.ItemText` | 項目ラベルです |
| `SegmentedControl.ItemHiddenInput` | hidden input 用の slot です |
| `SegmentedControl.Indicator` | 将来の indicator 用 slot です |