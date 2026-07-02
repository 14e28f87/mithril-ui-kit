# Combobox

<script setup>
import { setup as basicDemo } from './demos/combobox/basic'
import basicCode from './demos/combobox/basic.tsx?raw'
import { setup as multipleDemo } from './demos/combobox/multiple'
import multipleCode from './demos/combobox/multiple.tsx?raw'
import { setup as variantsDemo } from './demos/combobox/variants'
import variantsCode from './demos/combobox/variants.tsx?raw'
import { setup as sizesDemo } from './demos/combobox/sizes'
import sizesCode from './demos/combobox/sizes.tsx?raw'
import { setup as creatableDemo } from './demos/combobox/creatable'
import creatableCode from './demos/combobox/creatable.tsx?raw'
import { setup as groupsDemo } from './demos/combobox/groups'
import groupsCode from './demos/combobox/groups.tsx?raw'
import { setup as disabledDemo } from './demos/combobox/disabled'
import disabledCode from './demos/combobox/disabled.tsx?raw'
import { setup as asyncDemo } from './demos/combobox/async'
import asyncCode from './demos/combobox/async.tsx?raw'
</script>

## 概要

`Combobox` は検索可能な選択 UI です。テキスト入力で候補を絞り込みつつ選択できるため、項目数が多いモード選択やデバイス選択で使いやすくなります。グループ表示・複数選択・新規値作成（Creatable）・非同期ロードなど多彩な用途に対応します。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 複数選択

`multiple` を指定すると複数のアイテムをタグ形式で選択できます。

<MithrilDemo :setup="multipleDemo" :code="multipleCode" />

### バリアント

`variant` で外観を切り替えます。

<MithrilDemo :setup="variantsDemo" :code="variantsCode" />

### サイズ

`size` で入力欄のサイズを変更します。

<MithrilDemo :setup="sizesDemo" :code="sizesCode" />

### Creatable（新規値の作成）

`creatable` を指定すると、リストにない値を入力して追加できます。`onCreateItem` コールバックで受け取り、`items` に追加します。

<MithrilDemo :setup="creatableDemo" :code="creatableCode" />

### グループ表示

`ComboboxItem` の `group` フィールドを指定すると、アイテムがグループラベルつきで表示されます。

<MithrilDemo :setup="groupsDemo" :code="groupsCode" />

### 無効状態・エラー状態

`disabled` でコンポーネント全体を無効化します。`invalid` でエラー状態の赤いボーダーを表示します。個別アイテムの `disabled` も指定できます。

<MithrilDemo :setup="disabledDemo" :code="disabledCode" />

### 非同期ロード

`minChars` で最小入力文字数を設定し、入力イベントで `items` を非同期更新することでAPIドリブンな検索UIを実現できます。

<MithrilDemo :setup="asyncDemo" :code="asyncCode" />

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
| `invalid` | `boolean` | `false` | エラー状態のボーダーを表示します |
| `creatable` | `boolean` | `false` | リストにない値の新規作成を許可します |
| `onCreateItem` | `(value: string) => void` | — | 新規値が作成されたときに呼ばれます |
| `minChars` | `number` | `0` | ドロップダウンを開く最小入力文字数です（0 = 制限なし） |
| `class` | `string` | — | 追加クラスです |

### ComboboxItem

| プロパティ | Type | Description |
| --- | --- | --- |
| `value` | `string` | アイテムの値です |
| `label` | `string` | 表示ラベルです |
| `disabled` | `boolean` | このアイテムを無効化します |
| `group` | `string` | グループ名を指定するとグループラベルが表示されます |