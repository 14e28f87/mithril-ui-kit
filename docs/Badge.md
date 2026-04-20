# Badge

<script setup>
import { setup as basicDemo } from './demos/badge/basic'
import basicCode from './demos/badge/basic.tsx?raw'
</script>

## 概要

`Badge` は短いステータスやカテゴリ名を強調して表示するための小さなラベルです。一覧の状態表示やタグ付けに向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Badge Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"solid" \| "subtle" \| "outline" \| "surface" \| "plain"` | `"subtle"` | 見た目のバリエーションです |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"sm"` | ラベルのサイズです |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `class` | `string` | — | 追加クラスです |