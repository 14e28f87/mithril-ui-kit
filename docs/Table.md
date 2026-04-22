# Table

<script setup>
import { setup as basicDemo } from './demos/table/basic'
import basicCode from './demos/table/basic.tsx?raw'
</script>

## 概要

`Table` は表形式データを semantic な HTML 構造で組み立てるコンポーネントです。`Header`、`Body`、`Row`、`Cell` を明示的に分けられるため、静的な管理表やサマリーテーブルを見通しよく書けます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Table.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"line" \| "outline"` | `"line"` | テーブルの見た目です |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | セル内の密度です |
| `striped` | `boolean` | `false` | 行ごとのストライプを表示します |
| `hoverable` | `boolean` | `false` | ホバー行ハイライトを有効にします |
| `stickyHeader` | `boolean` | `false` | ヘッダーを sticky 表示にします |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Table.Header` | `thead` です |
| `Table.Body` | `tbody` です |
| `Table.Footer` | `tfoot` です |
| `Table.Row` | `tr` です |
| `Table.ColumnHeader` | `th` です |
| `Table.Cell` | `td` です |
| `Table.Caption` | `caption` です |