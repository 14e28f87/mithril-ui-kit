# RadioGroup

<script setup>
import { setup as basicDemo } from './demos/radio-group/basic'
import basicCode from './demos/radio-group/basic.tsx?raw'
</script>

## 概要

ラジオボタングループコンポーネント。options 配列による一括レンダリング、または子要素としての Radio コンポーネント配置をサポート。horizontal / vertical レイアウト切替、disabled 状態の一括制御、値の等価比較（文字列・数値の柔軟な比較）。

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## Props

- `value?: any` - 選択中の値（外部制御）
- `oninput?: (value: any) => void` - 値変更時のコールバック
- `options?: {label: m.Children, value: any, disabled?: boolean, error?: boolean}[]` - 選択肢配列
- `name?: string` - input の name 属性
- `disabled?: boolean` - グループ全体を無効化
- `orientation?: "horizontal" | "vertical"` - レイアウト方向（デフォルト: "vertical"）
- `class?: string` - 追加クラス

## 使用例

```tsx
// options 配列を使う場合
<RadioGroup
  value={selectedValue}
  oninput={(val) => selectedValue = val}
  options={[
    { label: "オプション1", value: "opt1" },
    { label: "オプション2", value: "opt2" }
  ]}
/>

// 子要素として Radio を配置する場合
<RadioGroup value={selectedValue} oninput={(val) => selectedValue = val}>
  <Radio value="opt1">オプション1</Radio>
  <Radio value="opt2">オプション2</Radio>
</RadioGroup>
```