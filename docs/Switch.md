# Switch

<script setup>
import { setup as basicDemo } from './demos/switch/basic'
import basicCode from './demos/switch/basic.tsx?raw'
</script>

## 概要

スイッチ コンポーネント。制御モード（`checked`）と非制御モード（`defaultChecked`）の両方をサポート。

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## 基本的な使い方

```tsx
<Switch.Root
  checked={isOn}
  onCheckedChange={({ checked }) => isOn = checked}
>
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label>Wi-Fi</Switch.Label>
</Switch.Root>
```

## コンポーネント構成

| パーツ | 説明 |
|--------|------|
| `Switch.Root` | ルートコンポーネント。状態管理とスタイルを提供 |
| `Switch.Control` | トラック（レール）部分 |
| `Switch.Thumb` | つまみ |
| `Switch.ThumbIndicator` | つまみ内に表示するアイコン等 |
| `Switch.Label` | ラベル |
| `Switch.Indicator` | チェック状態を示すインジケーター |
| `Switch.HiddenInput` | フォーム送信用の隠し input |

## Props

### Switch.Root

| Prop | 型 | デフォルト | 説明 |
|------|----|-----------|------|
| `checked` | `boolean` | — | チェック状態（制御モード） |
| `defaultChecked` | `boolean` | `false` | 初期チェック状態（非制御モード） |
| `onCheckedChange` | `(details: { checked: boolean }) => void` | — | 状態変更コールバック |
| `disabled` | `boolean` | `false` | 無効化 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `invalid` | `boolean` | `false` | バリデーションエラー状態 |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | サイズ |
| `variant` | `"solid" \| "raised"` | `"solid"` | 外観バリアント |
| `colorPalette` | `string` | — | カスタムカラー（CSS カラー値） |
| `name` | `string` | — | フォーム送信用の名前 |
| `value` | `string` | `"on"` | フォーム送信用の値 |

### Switch.Indicator

| Prop | 型 | 説明 |
|------|----|------|
| `fallback` | `m.Children` | 未チェック時に表示する内容 |

## カスタムカラー

```tsx
<Switch.Root defaultChecked={true} colorPalette="#10b981">
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
</Switch.Root>
```
