# TextArea

<script setup>
import { setup as basicDemo } from './demos/text-area/basic'
import basicCode from './demos/text-area/basic.tsx?raw'
</script>

## 概要

`TextArea` は複数行テキストを入力するためのコンポーネントです。`autoresize` を有効にすると、入力内容に応じて高さを自動で伸縮させられます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### TextArea Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "subtle" \| "flushed"` | `"outline"` | 見た目のバリエーションです |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | 入力欄サイズです |
| `autoresize` | `boolean` | `false` | 入力内容に応じて高さを自動調整します |
| `resize` | `"none" \| "vertical" \| "horizontal" \| "both"` | `"vertical"` | 手動リサイズ方向です |
| `disabled` | `boolean` | `false` | 無効化します |
| `invalid` | `boolean` | `false` | エラー状態の見た目にします |
| `placeholder` | `string` | — | プレースホルダーです |
| `class` | `string` | — | 追加クラスです |