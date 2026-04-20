# NumberInput

<script setup>
import { setup as basicDemo } from './demos/number-input/basic'
import { setup as standaloneDemo } from './demos/number-input/standalone'
import { setup as controlledDemo } from './demos/number-input/controlled'
import { setup as precisionDemo } from './demos/number-input/precision'
import { setup as variantDemo } from './demos/number-input/variant'

import basicCode from './demos/number-input/basic.tsx?raw'
import standaloneCode from './demos/number-input/standalone.tsx?raw'
import controlledCode from './demos/number-input/controlled.tsx?raw'
import precisionCode from './demos/number-input/precision.tsx?raw'
import variantCode from './demos/number-input/variant.tsx?raw'
</script>

## 概要

`NumberInput` は source 上 `InputNumber` として実装されている compound component 型の数値入力コンポーネントです。増減ボタン、キーボード操作、マウスホイール操作、`precision` による小数制御に対応し、`Form` / `FormItem` と統合して使用できます。

サブコンポーネント: `Root` / `Input` / `Control` / `IncrementTrigger` / `DecrementTrigger` / `Label` / `ValueText`

## Usage 使用例

### 基本（Control + Input）

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 単独の増減ボタン

<MithrilDemo :setup="standaloneDemo" :code="standaloneCode" />

### 制御モード（controlled）

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

### 小数点精度 + Label + ValueText

<MithrilDemo :setup="precisionDemo" :code="precisionCode" />

### variant / size バリエーション

<MithrilDemo :setup="variantDemo" :code="variantCode" />


## API Reference

### NumberInput.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `min` | `number` | — | 最小値です |
| `max` | `number` | — | 最大値です |
| `step` | `number` | `1` | 増減時の刻み幅です |
| `value` | `number \| null` | — | 制御モード時の現在値です |
| `defaultValue` | `number \| null` | `null` | 非制御モード時の初期値です |
| `onValueChange` | `(details: NumberInputValueChangeDetails) => void` | — | 値変更時に呼ばれます |
| `oninput` | `(value: number \| null) => void` | — | Form 互換用の簡易入力コールバックです |
| `onblur` | `() => void` | — | blur 時に呼ばれます |
| `disabled` | `boolean` | `false` | 無効化します |
| `readOnly` | `boolean` | `false` | 読み取り専用にします |
| `name` | `string` | — | input 要素の `name` 属性です |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | 入力欄サイズです |
| `variant` | `"outline" \| "filled" \| "flushed"` | `"outline"` | 見た目のバリエーションです |
| `precision` | `number` | — | 小数点以下の桁数です |
| `clampValueOnBlur` | `boolean` | `true` | blur 時に min / max へ収めます |
| `allowMouseWheel` | `boolean` | `false` | フォーカス中にマウスホイールで増減できるようにします |
| `width` | `string` | — | コンポーネント全体の幅です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | ルートのインラインスタイルです |

### NumberInputValueChangeDetails

| Field | Type | Description |
| --- | --- | --- |
| `value` | `number \| null` | 正規化後の数値です |
| `valueAsString` | `string` | 表示用に整形された文字列です |

### NumberInput.Input Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `placeholder` | `string` | — | プレースホルダーです |
| `class` | `string` | — | 入力欄に追加するクラスです |
| `style` | `Record<string, string>` | — | 入力欄のインラインスタイルです |

### 補助 subcomponents の Props

| Component | Props |
| --- | --- |
| `NumberInput.Control` | `class?: string`, `style?: Record<string, string>` |
| `NumberInput.IncrementTrigger` | `class?: string`, `style?: Record<string, string>` |
| `NumberInput.DecrementTrigger` | `class?: string`, `style?: Record<string, string>` |
| `NumberInput.Label` | `class?: string`, `style?: Record<string, string>` |
| `NumberInput.ValueText` | `class?: string`, `style?: Record<string, string>` |

### Subcomponents

| Component | Description |
| --- | --- |
| `NumberInput.Root` | 値管理、バリデーション、キーボード操作を管理するルートです |
| `NumberInput.Input` | テキスト入力フィールドです |
| `NumberInput.Control` | 増減ボタンを縦にまとめるラッパーです |
| `NumberInput.IncrementTrigger` | 値を増やすボタンです |
| `NumberInput.DecrementTrigger` | 値を減らすボタンです |
| `NumberInput.Label` | ラベル表示です |
| `NumberInput.ValueText` | 現在値の表示専用テキストです |
