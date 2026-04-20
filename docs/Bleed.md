# Bleed

<script setup>
import { setup as basicDemo } from './demos/bleed/basic'
import basicCode from './demos/bleed/basic.tsx?raw'
</script>

## 概要

`Bleed` は親コンテナの padding をまたいで要素を外側へ広げるためのユーティリティです。カード内のフルブリード画像やセクションの色帯を作るときに便利です。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Bleed Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `inline` | `string \| number` | — | 左右方向の負マージンをまとめて指定します |
| `block` | `string \| number` | — | 上下方向の負マージンをまとめて指定します |
| `inlineStart` | `string \| number` | — | 左側だけ広げます |
| `inlineEnd` | `string \| number` | — | 右側だけ広げます |
| `blockStart` | `string \| number` | — | 上側だけ広げます |
| `blockEnd` | `string \| number` | — | 下側だけ広げます |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |