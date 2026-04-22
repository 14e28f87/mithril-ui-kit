# Radio

<script setup>
import { setup as basicDemo } from './demos/radio/basic'
import basicCode from './demos/radio/basic.tsx?raw'
</script>

## 概要

`Radio` はラジオグループです。`Radio.Root` 配下に `Radio.Item` を並べて単一選択を構成し、`onValueChange` で現在値を受け取ります。

旧来の単体ラジオ API（`RadioClassic`）はレガシー扱いです。このページでは current API を案内します。

## Usage 使用例

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Radio.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"solid" \| "outline" \| "subtle"` | `"outline"` | インジケーターの見た目です |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | 項目サイズです |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `value` | `string` | — | 制御モード時の現在値です |
| `defaultValue` | `string` | — | 非制御モード時の初期値です |
| `onValueChange` | `(detail: { value: string }) => void` | — | 値変更時に呼ばれます |
| `name` | `string` | 自動生成 | hidden input 用の name 属性です |
| `disabled` | `boolean` | `false` | すべての項目を無効化します |
| `readOnly` | `boolean` | `false` | 読み取り専用にします |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | 配置方向です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | ルート要素のインラインスタイルです |

### Radio.Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 項目の識別値です |
| `disabled` | `boolean` | `false` | 個別に無効化します |
| `invalid` | `boolean` | `false` | バリデーションエラーの見た目です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | 項目のインラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Radio.Root` | 単一選択グループ全体を管理します |
| `Radio.Item` | 1 件の選択項目です |
| `Radio.ItemHiddenInput` | フォーム送信用の hidden radio input です |
| `Radio.ItemIndicator` | 丸い選択インジケーターです |
| `Radio.ItemText` | 項目ラベルです |

## 使用例

```tsx
<Radio.Root value={value} onValueChange={(details) => { value = details.value; }}>
  <Radio.Item value="a">
    <Radio.ItemHiddenInput />
    <Radio.ItemIndicator />
    <Radio.ItemText>オプション A</Radio.ItemText>
  </Radio.Item>
  <Radio.Item value="b">
    <Radio.ItemHiddenInput />
    <Radio.ItemIndicator />
    <Radio.ItemText>オプション B</Radio.ItemText>
  </Radio.Item>
</Radio.Root>
```