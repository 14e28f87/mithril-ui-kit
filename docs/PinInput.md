# PinInput

<script setup>
import { setup as basicDemo } from './demos/pin-input/basic'
import basicCode from './demos/pin-input/basic.tsx?raw'
</script>

## 概要

`PinInput` は PIN や OTP を 1 文字ずつ分割入力するコンポーネントです。貼り付け、カーソル移動、完了通知に対応しており、認証コード入力の UI をシンプルに構築できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### PinInput.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | 入力欄サイズです |
| `count` | `number` | `4` | 入力桁数です |
| `value` | `string[]` | — | 制御モード時の値配列です |
| `onValueChange` | `(values: string[]) => void` | — | 値変更時に呼ばれます |
| `onComplete` | `(valueString: string) => void` | — | 全桁入力完了時に呼ばれます |
| `mask` | `boolean` | `false` | 入力値をマスク表示します |
| `otp` | `boolean` | `false` | OTP 自動補完ヒントを有効にします |
| `placeholder` | `string` | `"○"` | 各入力欄のプレースホルダーです |
| `type` | `"alphanumeric" \| "numeric" \| "alphabetic"` | `"numeric"` | 入力可能文字種です |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |