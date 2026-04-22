# Alert

<script setup>
import { setup as basicDemo } from './demos/alert/basic'
import basicCode from './demos/alert/basic.tsx?raw'
</script>

## 概要

`Alert` は成功・警告・エラーなどのフィードバックをまとまったブロックで表示するコンポーネントです。`Alert.Content` の中で `Title` と `Description` を組み合わせると、情報密度を保った通知を作れます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Alert.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `status` | `"info" \| "warning" \| "success" \| "error" \| "neutral"` | `"info"` | 通知の意味づけです |
| `variant` | `"subtle" \| "surface" \| "outline" \| "solid"` | `"subtle"` | 見た目のバリエーションです |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | コンポーネントサイズです |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Alert.Indicator` | ステータスアイコン領域です |
| `Alert.Content` | テキスト内容のラッパーです |
| `Alert.Title` | 見出しです |
| `Alert.Description` | 補足文です |