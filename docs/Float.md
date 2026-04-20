# Float

<script setup>
import { setup as basicDemo } from './demos/float/basic'
import basicCode from './demos/float/basic.tsx?raw'
</script>

## 概要

`Float` は親要素の四隅や中央辺へ小さな要素を重ねて配置するユーティリティです。通知バッジ、オンライン表示、補助ラベルなどを親コンテンツに重ねたいときに使います。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Float Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `FloatPlacement` | `"top-end"` | 配置位置を指定します |
| `offset` | `string \| number` | — | X/Y 共通のオフセットです |
| `offsetX` | `string \| number` | — | 水平方向だけ個別にずらします |
| `offsetY` | `string \| number` | — | 垂直方向だけ個別にずらします |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

## 補足

親要素側に `position: relative` を設定してください。