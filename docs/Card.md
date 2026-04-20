# Card

<script setup>
import { setup as basicDemo } from './demos/card/basic'
import basicCode from './demos/card/basic.tsx?raw'
</script>

## 概要

`Card` は情報のまとまりを視覚的にグルーピングする compound component です。ヘッダー、本文、フッターを意味的に分けられるので、ダッシュボードカードや設定パネルの土台として使いやすくなっています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Card.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"elevated" \| "outline" \| "subtle"` | `"outline"` | カードの見た目です |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 内側余白と文字サイズの基準です |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Card.Header` | ヘッダー領域です |
| `Card.Body` | 本文領域です |
| `Card.Footer` | フッター領域です |
| `Card.Title` | タイトルです |
| `Card.Description` | 補足説明です |