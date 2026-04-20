# Listbox

<script setup>
import { setup as basicDemo } from './demos/listbox/basic'
import basicCode from './demos/listbox/basic.tsx?raw'
</script>

## 概要

`Listbox` は候補を一覧表示して選択するコンポーネントです。単一選択にも複数選択にも対応し、検索入力が不要な短い候補集合を扱うのに向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Listbox.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"subtle" \| "solid" \| "plain"` | `"subtle"` | 見た目のバリエーションです |
| `items` | `ListboxItem[]` | — | 選択候補一覧です |
| `value` | `string \| string[]` | — | 現在値です |
| `onValueChange` | `(value: string \| string[]) => void` | — | 値変更時に呼ばれます |
| `selectionMode` | `"single" \| "multiple"` | `"single"` | 選択モードです |
| `class` | `string` | — | 追加クラスです |