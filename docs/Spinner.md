# Spinner

<script setup>
import { setup as basicDemo } from './demos/spinner/basic'
import basicCode from './demos/spinner/basic.tsx?raw'
</script>

## 概要

`Spinner` は非同期処理中であることを示すローディングインジケーターです。ボタン横、画面の空状態、データ取得中の差し込み表示によく使います。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Spinner Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"inherit" \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | スピナーサイズです |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `label` | `string` | `"読み込み中"` | スクリーンリーダー向けラベルです |
| `class` | `string` | — | 追加クラスです |