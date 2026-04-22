# TagsInput

<script setup>
import { setup as basicDemo } from './demos/tags-input/basic'
import { setup as editableDemo } from './demos/tags-input/editable'

import basicCode from './demos/tags-input/basic.tsx?raw'
import editableCode from './demos/tags-input/editable.tsx?raw'
</script>

## 概要

`TagsInput` はタグの追加。・削除・編集・クリアが行えるコンポーネントです。

## Usage 使用例

### 基本

Enter または区切り文字でタグを追加する最小構成です。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 編集可能タグ

`editable` と `validate` を使い、ダブルクリック編集と簡単な入力制約を付けた例です。

<MithrilDemo :setup="editableDemo" :code="editableCode" />

## API Reference

### Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string[]` | — | 制御モード時のタグ配列です |
| `defaultValue` | `string[]` | `[]` | 非制御モード時の初期タグです |
| `onValueChange` | `(details) => void` | — | タグ配列変更時に呼ばれます |
| `onInputValueChange` | `(details) => void` | — | 入力欄の文字列変更時に呼ばれます |
| `max` | `number` | `Infinity` | 登録可能な最大タグ数です |
| `disabled` | `boolean` | `false` | 全体を無効化します |
| `readOnly` | `boolean` | `false` | タグ追加・削除を禁止します |
| `invalid` | `boolean` | `false` | 無効状態の見た目を適用します |
| `validate` | `({ value, inputValue }) => boolean` | — | 新規タグ追加時のバリデーションです |
| `delimiter` | `string \| RegExp` | `","` | 入力中にタグを分割する区切り文字です |
| `addOnPaste` | `boolean` | `false` | ペースト時に区切り文字で分割して追加します |
| `blurBehavior` | `"clear" \| "add"` | — | blur 時の入力値の扱いを制御します |
| `editable` | `boolean` | `false` | 既存タグのインライン編集を許可します |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | サイズを指定します |
| `variant` | `"outline" \| "subtle"` | `"outline"` | 見た目のバリアントです |
| `name` | `string` | — | フォーム送信用の name 属性です |
| `class` | `string` | — | ルート要素の追加クラスです |
| `style` | `Record<string, string>` | — | ルート要素のインラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `TagsInput.Root` | 状態管理を行うルートです |
| `TagsInput.Label` | ラベル表示です |
| `TagsInput.Control` | タグ群と入力欄のコンテナです |
| `TagsInput.Item` | 個々のタグを表すラッパーです |
| `TagsInput.ItemPreview` | 通常表示時のタグ領域です |
| `TagsInput.ItemText` | タグ文字列の表示です |
| `TagsInput.ItemDeleteTrigger` | 個別タグ削除ボタンです |
| `TagsInput.ItemInput` | 編集モード時の入力欄です |
| `TagsInput.Input` | 新しいタグを追加する入力欄です |
| `TagsInput.ClearTrigger` | すべてのタグを一括クリアします |
| `TagsInput.HiddenInput` | フォーム送信用の hidden input です |