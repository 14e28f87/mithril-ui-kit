# Timeline

<script setup>
import { setup as basicDemo } from './demos/timeline/basic'
import basicCode from './demos/timeline/basic.tsx?raw'
</script>

## 概要

`Timeline` はイベントやステップの流れを縦方向に可視化する compound component です。ジョブ履歴、処理段階、監査ログの可読性を高める用途に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Timeline.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"subtle" \| "solid" \| "outline" \| "plain"` | `"solid"` | 見た目のバリエーションです |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | タイムラインのサイズです |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Timeline.Item` | 1 件分のイベントです |
| `Timeline.Separator` | 左側のインジケーター列です |
| `Timeline.Indicator` | 各イベントの印です |
| `Timeline.Connector` | イベント同士を結ぶ線です |
| `Timeline.Content` | テキスト内容です |
| `Timeline.Title` | 見出しです |
| `Timeline.Description` | 補足文です |