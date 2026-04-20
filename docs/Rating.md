# Rating

<script setup>
import { setup as basicDemo } from './demos/rating/basic'
import basicCode from './demos/rating/basic.tsx?raw'
</script>

## 概要

`Rating` は星評価の入力と表示を行うコンポーネントです。読み取り専用表示にも、半分刻みのインタラクティブな評価入力にも対応します。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Rating.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | アイコンサイズです |
| `colorPalette` | `string` | `"orange"` | カラー CSS 変数へ反映する色です |
| `count` | `number` | `5` | 星の数です |
| `value` | `number` | — | 制御モード時の現在値です |
| `defaultValue` | `number` | `0` | 非制御モード時の初期値です |
| `onValueChange` | `(value: number) => void` | — | 値変更時に呼ばれます |
| `allowHalf` | `boolean` | `false` | 0.5 刻みの評価を許可します |
| `readOnly` | `boolean` | `false` | 読み取り専用にします |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |