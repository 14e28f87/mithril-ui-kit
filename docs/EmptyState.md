# EmptyState

<script setup>
import { setup as basicDemo } from './demos/empty-state/basic'
import basicCode from './demos/empty-state/basic.tsx?raw'
</script>

## 概要

`EmptyState` はデータが存在しない状態を説明付きで表示するためのコンポーネントです。アイコン、タイトル、説明文を縦に積み、一覧や検索結果の空状態を明確に伝えます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### EmptyState.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 表示サイズです |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `EmptyState.Content` | 中央揃えされた内容ラッパーです |
| `EmptyState.Indicator` | アイコンやイラストの領域です |
| `EmptyState.Title` | 見出しです |
| `EmptyState.Description` | 補足文です |