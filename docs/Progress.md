# Progress

<script setup>
import { setup as basicDemo } from './demos/progress/basic'
import basicCode from './demos/progress/basic.tsx?raw'
</script>

## 概要

`Progress` は横方向の進捗バーを表現する compound component です。ラベル、パーセンテージ表示、トラックを組み合わせて、処理進行やアップロード状況を視覚化できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Progress.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number \| null` | — | 現在値です。`null` で不確定状態になります |
| `min` | `number` | `0` | 最小値です |
| `max` | `number` | `100` | 最大値です |
| `variant` | `"outline" \| "subtle"` | `"outline"` | 見た目のバリエーションです |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | バーの高さです |
| `colorPalette` | `string` | `"blue"` | カラー CSS 変数へ反映する色です |
| `striped` | `boolean` | `false` | ストライプ模様を表示します |
| `animated` | `boolean` | `false` | ストライプをアニメーションさせます |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Progress.Label` | 左側のラベルです |
| `Progress.ValueText` | パーセンテージ表示です |
| `Progress.Track` | バー全体のトラックです |
| `Progress.Range` | 進行部分を表す要素です |