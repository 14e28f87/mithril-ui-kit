# ScrollArea

<script setup>
import { setup as basicDemo } from './demos/scroll-area/basic'
import basicCode from './demos/scroll-area/basic.tsx?raw'
</script>

## 概要

`ScrollArea` は一定サイズの領域にスクロール可能なコンテンツを収めるためのコンポーネントです。ログ一覧、履歴、長い設定パネルなどの収まりを整える用途に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### ScrollArea Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"scroll" \| "auto" \| "hover" \| "always"` | `"auto"` | スクロールバーの表示方針です |
| `maxHeight` | `string \| number` | — | 最大高さです |
| `maxWidth` | `string \| number` | — | 最大幅です |
| `scrollbarSize` | `"sm" \| "md" \| "lg"` | `"md"` | スクロールバーの太さです |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |