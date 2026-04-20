# Wrap

<script setup>
import { setup as basicDemo } from './demos/wrap/basic'
import basicCode from './demos/wrap/basic.tsx?raw'
</script>

## 概要

`Wrap` は要素を自動で折り返しながら並べるレイアウトコンポーネントです。タグ一覧やメタ情報の集合など、横並びと改行の両方が必要な場面で使います。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Wrap Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `gap` | `string \| number` | `"8px"` | 行列共通の間隔です |
| `rowGap` | `string \| number` | — | 行間を指定します |
| `columnGap` | `string \| number` | — | 列間を指定します |
| `align` | `string` | — | `align-items` を指定します |
| `justify` | `string` | — | `justify-content` を指定します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |