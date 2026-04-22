# NativeSelect

<script setup>
import { setup as basicDemo } from './demos/native-select/basic'
import basicCode from './demos/native-select/basic.tsx?raw'
</script>

## 概要

`NativeSelect` はブラウザ標準の `select` をラップして見た目を整えるコンポーネントです。アクセシビリティやフォーム互換を保ったまま、統一された外観を与えたい場面に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### NativeSelect.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "subtle" \| "plain" \| "ghost"` | `"outline"` | 見た目のバリエーションです |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | 入力欄サイズです |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `NativeSelect.Field` | 実際の `select` 要素です |
| `NativeSelect.Indicator` | 末尾の矢印表示です |