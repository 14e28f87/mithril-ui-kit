# Status

<script setup>
import { setup as basicDemo } from './demos/status/basic'
import basicCode from './demos/status/basic.tsx?raw'
</script>

## 概要

`Status` は小さなインジケーターとテキストで状態を表すコンポーネントです。機器の接続状態、ジョブ進行、警告表示などの軽量なステータス表現に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Status.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `"info" \| "warning" \| "success" \| "error"` | `"info"` | 状態値です |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 表示サイズです |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Status.Root` | 状態値とテキストをまとめるルートです |
| `Status.Indicator` | 色付きの丸インジケーターです |