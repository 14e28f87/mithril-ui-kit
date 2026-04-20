# HoverCard

<script setup>
import { setup as basicDemo } from './demos/hover-card/basic'
import basicCode from './demos/hover-card/basic.tsx?raw'
</script>

## 概要

`HoverCard` はホバー中だけ詳細情報を表示する軽量な compound component です。ツールチップより情報量を増やしたいが、クリック操作までは不要な場面に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### HoverCard.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `openDelay` | `number` | `600` | 表示までの遅延ミリ秒です |
| `closeDelay` | `number` | `300` | 非表示までの遅延ミリ秒です |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | カードサイズです |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | 表示位置です |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `HoverCard.Trigger` | ホバー起点になる要素です |
| `HoverCard.Positioner` | 位置決めのためのラッパーです |
| `HoverCard.Content` | 表示される内容です |
| `HoverCard.Arrow` | 矢印 slot です |
| `HoverCard.ArrowTip` | 矢印先端 slot です |