# IconButton

<script setup>
import { setup as basicDemo } from './demos/icon-button/basic'
import basicCode from './demos/icon-button/basic.tsx?raw'
</script>

## 概要

`IconButton` はアイコンのみを表示する正方形ボタンです。ツールバーやカード右上の小さな操作トリガーなど、短いラベルを持たない UI に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### IconButton Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ButtonVariant` | `"solid"` | ボタンの見た目です |
| `size` | `ButtonSize` | `"md"` | ボタンサイズです |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `disabled` | `boolean` | `false` | 無効化します |
| `loading` | `boolean` | `false` | ローディング状態にします |
| `rounded` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | — | 角丸を上書きします |
| `aria-label` | `string` | — | アクセシビリティ用の必須ラベルです |
| `class` | `string` | — | 追加クラスです |
| `onclick` | `(e: Event) => void` | — | クリック時に呼ばれます |

## 補足

可視ラベルが無いので、`aria-label` の指定を推奨します。