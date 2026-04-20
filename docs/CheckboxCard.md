# CheckboxCard

<script setup>
import { setup as basicDemo } from './demos/checkbox-card/basic'
import basicCode from './demos/checkbox-card/basic.tsx?raw'
</script>

## 概要

`CheckboxCard` はカード全体をクリック可能な選択 UI にする compound component です。設定項目の有効化や比較的長い説明文を伴う選択肢に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### CheckboxCard.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"surface" \| "subtle" \| "outline" \| "solid"` | `"outline"` | カードの見た目です |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | カードサイズです |
| `checked` | `boolean` | — | 制御モード時の値です |
| `defaultChecked` | `boolean` | `false` | 非制御モード時の初期値です |
| `onCheckedChange` | `(checked: boolean) => void` | — | 値変更時に呼ばれます |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `CheckboxCard.Control` | チェック状態を含む主要レイアウトです |
| `CheckboxCard.Content` | ラベル群のラッパーです |
| `CheckboxCard.Label` | 項目名です |
| `CheckboxCard.Description` | 補足文です |
| `CheckboxCard.Indicator` | チェックマーク表示です |
| `CheckboxCard.Addon` | 追加情報や右端要素です |