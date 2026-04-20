# Combobox

<script setup>
import { setup as basicDemo } from './demos/combobox/basic'
import basicCode from './demos/combobox/basic.tsx?raw'
</script>

## 概要

`Combobox` は検索可能な選択 UI です。テキスト入力で候補を絞り込みつつ選択できるため、項目数が多いモード選択やデバイス選択で使いやすくなります。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Combobox.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "subtle" \| "flushed"` | `"outline"` | 見た目のバリエーションです |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | 入力欄サイズです |
| `items` | `ComboboxItem[]` | — | 選択候補一覧です |
| `value` | `string \| string[]` | — | 現在値です |
| `onValueChange` | `(value: string \| string[]) => void` | — | 値変更時に呼ばれます |
| `multiple` | `boolean` | `false` | 複数選択モードです |
| `openOnClick` | `boolean` | `true` | フォーカス時に一覧を開きます |
| `placeholder` | `string` | `"検索..."` | 入力プレースホルダーです |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |