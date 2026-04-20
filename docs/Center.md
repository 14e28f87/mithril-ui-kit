# Center

<script setup>
import { setup as basicDemo } from './demos/center/basic'
import basicCode from './demos/center/basic.tsx?raw'
</script>

## 概要

`Center` は子要素を水平・垂直の両方向で中央に配置します。`Square` は正方形コンテナ、`Circle` は円形コンテナのショートカットで、アイコンや数値バッジの土台に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Center Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `inline` | `boolean` | `false` | `inline-flex` として描画します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### Square / Circle Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `string \| number` | — | 幅と高さに同じ値を適用します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### Aliases

| Component | Description |
| --- | --- |
| `Center` | 自由サイズの中央配置コンテナです |
| `Square` | 正方形の中央配置コンテナです |
| `Circle` | 円形の中央配置コンテナです |