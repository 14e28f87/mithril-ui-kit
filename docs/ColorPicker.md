# ColorPicker

<script setup>
import { setup as basicDemo } from './demos/color-picker/basic'
import { setup as swatchesDemo } from './demos/color-picker/swatches'

import basicCode from './demos/color-picker/basic.tsx?raw'
import swatchesCode from './demos/color-picker/swatches.tsx?raw'
</script>

## 概要

`ColorPicker` は compound component 版のカラーピッカーです。入力欄、トリガー、色相・透明度スライダー、スウォッチ群を組み合わせて UI を構成できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### プリセット色

<MithrilDemo :setup="swatchesDemo" :code="swatchesCode" />

## API Reference

### Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 制御モード時のカラー文字列です |
| `defaultValue` | `string` | `"#ff0000"` | 非制御モード時の初期値です |
| `onValueChange` | `(details) => void` | — | 値変更中に呼ばれます |
| `onValueChangeEnd` | `(details) => void` | — | ドラッグや入力確定後に呼ばれます |
| `format` | `"hex" \| "hexa" \| "rgb" \| "rgba" \| "hsl" \| "hsla"` | `"hex"` | 入出力フォーマットです |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | サイズを指定します |
| `disabled` | `boolean` | `false` | 無効化します |
| `readOnly` | `boolean` | `false` | 読み取り専用にします |
| `name` | `string` | — | フォーム送信用 name 属性です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | インラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `ColorPicker.Root` | 状態を管理するルートです |
| `ColorPicker.Label` | ラベル表示です |
| `ColorPicker.Control` | 入力欄とトリガーのコンテナです |
| `ColorPicker.Input` | カラー文字列の入力欄です |
| `ColorPicker.Trigger` | パネル開閉トリガーです |
| `ColorPicker.Positioner` | パネル配置要素です |
| `ColorPicker.Content` | パネル本体です |
| `ColorPicker.Area` | 彩度・明度を変更する 2D エリアです |
| `ColorPicker.ChannelSlider` | `hue` / `alpha` の横スライダーです |
| `ColorPicker.SwatchGroup` | スウォッチ一覧のコンテナです |
| `ColorPicker.SwatchTrigger` | 選択用スウォッチボタンです |
| `ColorPicker.Swatch` | 単体スウォッチ表示です |
| `ColorPicker.EyeDropper` | EyeDropper API 連携ボタンです |