# TreeView

<script setup>
import { setup as basicDemo } from './demos/tree-view/basic'
import basicCode from './demos/tree-view/basic.tsx?raw'
</script>

## 概要

`TreeView` は階層データを展開・選択しながら閲覧するコンポーネントです。フォルダ構造、レシピカテゴリ、デバイスマップのような階層情報を扱う用途に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### TreeView.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 行高さとフォント密度です |
| `variant` | `"plain" \| "subtle"` | `"plain"` | 見た目のバリエーションです |
| `selectedIds` | `string[]` | — | 現在の選択ノード ID 群です |
| `onSelectionChange` | `(ids: string[]) => void` | — | 選択変更時に呼ばれます |
| `expandedIds` | `string[]` | — | 現在展開中のノード ID 群です |
| `onExpandChange` | `(ids: string[]) => void` | — | 展開状態変更時に呼ばれます |
| `data` | `TreeNode[]` | `[]` | ツリーデータです |
| `class` | `string` | — | 追加クラスです |