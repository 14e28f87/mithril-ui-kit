# Tag

<script setup>
import { setup as basicDemo } from './demos/tag/basic'
import basicCode from './demos/tag/basic.tsx?raw'
</script>

## 概要

`Tag` はカテゴリ名や状態ラベルをコンパクトに表示する compound component です。開始アイコン、終了アイコン、閉じるトリガーを組み合わせることで、単なるラベル以上の情報を持たせられます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Tag.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"subtle" \| "solid" \| "outline" \| "surface"` | `"subtle"` | 見た目のバリエーションです |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | タグのサイズです |
| `colorPalette` | `string` | `"gray"` | カラー CSS 変数へ反映する色です |
| `closable` | `boolean` | `false` | 既定の閉じるトリガーを自動表示します |
| `onClose` | `() => void` | — | 閉じる操作時に呼ばれます |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Tag.Label` | ラベル本文です |
| `Tag.StartElement` | 先頭アイコンや絵文字です |
| `Tag.EndElement` | 末尾要素です |
| `Tag.CloseTrigger` | 明示的な閉じるボタンです |