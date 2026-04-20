# AbsoluteCenter

<script setup>
import { setup as basicDemo } from './demos/absolute-center/basic'
import basicCode from './demos/absolute-center/basic.tsx?raw'
</script>

## 概要

`AbsoluteCenter` は親要素に対して絶対配置で中央寄せするユーティリティです。モーダル内のローディング表示やカード上のオーバーレイラベルなど、通常フローから独立した中央配置に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### AbsoluteCenter Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `axis` | `"horizontal" \| "vertical" \| "both"` | `"both"` | 中央寄せする軸を指定します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

## 補足

親要素側に `position: relative` などの位置基準が必要です。