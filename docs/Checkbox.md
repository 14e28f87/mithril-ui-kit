# Checkbox

<script setup>
import { setup as basicDemo } from './demos/checkbox/basic'
import { setup as groupDemo } from './demos/checkbox/group'

import basicCode from './demos/checkbox/basic.tsx?raw'
import groupCode from './demos/checkbox/group.tsx?raw'
</script>

## 概要

`Checkbox` は チェックボックスです。`Checkbox.Root` 単体での利用に加えて、`Checkbox.Group` で複数選択をまとめて管理できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### グループ管理

<MithrilDemo :setup="groupDemo" :code="groupCode" />

## API Reference

### Checkbox.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean \| "indeterminate"` | — | 制御モード時のチェック状態です |
| `defaultChecked` | `boolean \| "indeterminate"` | `false` | 非制御モード時の初期状態です |
| `onCheckedChange` | `(details) => void` | — | 状態変更時に呼ばれます |
| `disabled` | `boolean` | `false` | 無効化します |
| `invalid` | `boolean` | `false` | エラー状態の見た目にします |
| `readOnly` | `boolean` | `false` | 読み取り専用にします |
| `value` | `string` | `"on"` | フォーム送信用の値です |
| `name` | `string` | — | フォーム送信用の name 属性です |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | サイズを指定します |
| `variant` | `"solid" \| "outline" \| "subtle"` | `"solid"` | 見た目のバリアントです |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `class` | `string` | — | ルート要素の追加クラスです |
| `style` | `Record<string, string>` | — | ルート要素のインラインスタイルです |

### Checkbox.Group Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string[]` | — | 制御モード時の選択値配列です |
| `defaultValue` | `string[]` | `[]` | 非制御モード時の初期選択です |
| `onValueChange` | `(details) => void` | — | 選択配列変更時に呼ばれます |
| `disabled` | `boolean` | `false` | 子要素をまとめて無効化します |
| `name` | `string` | — | 各項目へ引き継ぐ name 属性です |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | 配置方向です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | インラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Checkbox.Root` | 状態を管理するルートです |
| `Checkbox.HiddenInput` | フォーム連携用の hidden / checkbox input です |
| `Checkbox.Control` | チェック枠です |
| `Checkbox.Indicator` | チェックマークまたは indeterminate 記号です |
| `Checkbox.Label` | ラベル表示です |
| `Checkbox.Group` | 複数 Checkbox を配列値で管理します |