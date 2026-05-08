# Select

<script setup>
import { setup as basicDemo } from './demos/select-new/basic'
import basicCode from './demos/select-new/basic.tsx?raw'
import { setup as multipleDemo } from './demos/select-new/multiple'
import multipleCode from './demos/select-new/multiple.tsx?raw'
import { setup as groupDemo } from './demos/select-new/group'
import groupCode from './demos/select-new/group.tsx?raw'
</script>

## 概要

セレクトです。`Select.Root`, `Select.Trigger`, `Select.Content`, `Select.Item` などのサブコンポーネントを組み合わせて柔軟にカスタマイズできます。


## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 複数選択

`multiple` prop で複数選択モードに切り替えます。

<MithrilDemo :setup="multipleDemo" :code="multipleCode" />

### グループ

`Select.ItemGroup` と `Select.ItemGroupLabel` を使って項目をグループ化できます。

<MithrilDemo :setup="groupDemo" :code="groupCode" />

## API Reference

### Select.Root Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `items` | `SelectItem[]` | `[]` | 選択肢の配列 |
| `value` | `string[]` | `[]` | 選択値の配列 |
| `onValueChange` | `(details: SelectValueChangeDetails) => void` | — | 値変更時のコールバック |
| `variant` | `"outline" \| "subtle" \| "ghost"` | `"outline"` | スタイルバリアント |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | サイズ |
| `multiple` | `boolean` | `false` | 複数選択を有効にする |
| `disabled` | `boolean` | `false` | 無効状態 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `invalid` | `boolean` | `false` | エラー状態 |
| `deselectable` | `boolean` | `false` | 選択済み項目のクリックで解除可能にする |
| `loopFocus` | `boolean` | `false` | キーボードフォーカスをループさせる |
| `positioning` | `"top" \| "bottom"` | `"bottom"` | ドロップダウンの表示位置 |
| `placeholder` | `string` | — | プレースホルダーテキスト |

### SelectItem 型

| フィールド | 型 | 説明 |
|---|---|---|
| `value` | `string` | 一意な値 |
| `label` | `string` | 表示テキスト |
| `disabled?` | `boolean` | 無効にする |
| `group?` | `string` | グループ名 |

### SelectValueChangeDetails 型

| フィールド | 型 | 説明 |
|---|---|---|
| `value` | `string[]` | 選択された値の配列 |
| `items` | `SelectItem[]` | 選択されたアイテムの配列 |

### サブコンポーネント一覧

| コンポーネント | 説明 |
|---|---|
| `Select.Root` | ルートコンテナ。状態管理と items/value を保持 |
| `Select.HiddenSelect` | フォーム送信用の hidden `<select>` |
| `Select.Label` | ラベルテキスト |
| `Select.Control` | トリガーを包むコンテナ |
| `Select.Trigger` | クリックでドロップダウンを開閉するボタン |
| `Select.ValueText` | 選択値の表示テキスト |
| `Select.IndicatorGroup` | インジケーター群のコンテナ |
| `Select.Indicator` | 開閉矢印アイコン |
| `Select.ClearTrigger` | 選択値をクリアするボタン |
| `Select.Positioner` | ドロップダウンの位置決めコンテナ |
| `Select.Content` | ドロップダウンの内容コンテナ |
| `Select.Item` | 選択肢アイテム。`item` prop に value 文字列を指定 |
| `Select.ItemGroup` | アイテムのグループコンテナ |
| `Select.ItemGroupLabel` | グループのラベル |
