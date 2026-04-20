# Box

<script setup>
import { setup as basicDemo } from './demos/box/basic'
import basicCode from './demos/box/basic.tsx?raw'
</script>

## 概要

`Box` は最小のレイアウトラッパーです。既定では `div` を描画し、`as` prop で任意の HTML 要素に切り替えられます。余白、背景、境界線などを持つコンテナを組み立てる基点として使います。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Box Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `string` | `"div"` | 描画する HTML 要素を切り替えます |
| `class` | `string` | — | 追加の CSS クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |
| `...rest` | `Record<string, any>` | — | そのほかの HTML 属性をそのまま渡します |