# Editable

<script setup>
import { setup as basicDemo } from './demos/editable/basic'
import { setup as textareaDemo } from './demos/editable/textarea'

import basicCode from './demos/editable/basic.tsx?raw'
import textareaCode from './demos/editable/textarea.tsx?raw'
</script>

## 概要

`Editable` はインライン編集用なコンポーネントです。表示モードと編集モードを切り替えながら、input または textarea ベースの編集体験を組み立てられます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 複数行編集

<MithrilDemo :setup="textareaDemo" :code="textareaCode" />

## API Reference

### Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 制御モード時の値です |
| `defaultValue` | `string` | `""` | 非制御モード時の初期値です |
| `placeholder` | `string \| { edit: string; preview: string }` | — | 表示・編集時のプレースホルダーです |
| `activationMode` | `"focus" \| "dblclick" \| "click" \| "none"` | `"focus"` | 編集開始トリガーです |
| `submitMode` | `"enter" \| "blur" \| "none" \| "both"` | `"both"` | 値コミット方法です |
| `onValueChange` | `(details) => void` | — | 入力中に呼ばれます |
| `onValueCommit` | `(details) => void` | — | コミット時に呼ばれます |
| `onValueRevert` | `(details) => void` | — | キャンセル時に呼ばれます |
| `onEditChange` | `(details) => void` | — | 編集状態変更時に呼ばれます |
| `disabled` | `boolean` | `false` | 無効化します |
| `readOnly` | `boolean` | `false` | 読み取り専用にします |
| `invalid` | `boolean` | `false` | エラー状態の見た目にします |
| `selectOnFocus` | `boolean` | `true` | 編集開始時に全選択します |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | サイズを指定します |
| `maxLength` | `number` | — | 最大文字数です |
| `name` | `string` | — | hidden input 用の name 属性です |
| `edit` | `boolean` | — | 制御モード時の編集状態です |
| `defaultEdit` | `boolean` | `false` | 非制御モード時の初期編集状態です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | インラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Editable.Root` | 状態を管理するルートです |
| `Editable.Preview` | 表示モードのプレビューです |
| `Editable.Input` | 単一行 input です |
| `Editable.Textarea` | 複数行 textarea です |
| `Editable.Label` | ラベル表示です |
| `Editable.Area` | 編集領域のマーカーです |
| `Editable.Control` | 編集ボタン群のコンテナです |
| `Editable.EditTrigger` | 編集開始ボタンです |
| `Editable.SubmitTrigger` | 保存ボタンです |
| `Editable.CancelTrigger` | キャンセルボタンです |