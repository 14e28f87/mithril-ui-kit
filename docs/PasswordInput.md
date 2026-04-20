# InputPassword

<script setup>
import { setup as basicDemo } from './demos/password-input/basic'
import { setup as labelDemo } from './demos/password-input/label'
import { setup as controlledDemo } from './demos/password-input/controlled'
import { setup as strengthDemo } from './demos/password-input/strength'
import { setup as variantDemo } from './demos/password-input/variant'

import basicCode from './demos/password-input/basic.tsx?raw'
import labelCode from './demos/password-input/label.tsx?raw'
import controlledCode from './demos/password-input/controlled.tsx?raw'
import strengthCode from './demos/password-input/strength.tsx?raw'
import variantCode from './demos/password-input/variant.tsx?raw'
</script>

## 概要

`PasswordInput` は compound component 型のパスワード入力コンポーネントです。パスワードの表示/非表示トグル、強度メーター、制御/非制御モードに対応しています。

Chakra UI の PasswordInput API を参考に設計されています。

サブコンポーネント: `Root` / `Input` / `VisibilityTrigger` / `Label` / `StrengthMeter`

## Usage

### 基本（Input + VisibilityTrigger）

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### Label + defaultVisible

<MithrilDemo :setup="labelDemo" :code="labelCode" />

### 制御モード（controlled）

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

### StrengthMeter（パスワード強度メーター）

<MithrilDemo :setup="strengthDemo" :code="strengthCode" />

### variant / size バリエーション

<MithrilDemo :setup="variantDemo" :code="variantCode" />

## API Reference

### PasswordInput.Root

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `value` | `string` | — | 制御モード: パスワードの現在値 |
| `defaultValue` | `string` | `""` | 非制御モード: 初期値 |
| `onValueChange` | `(value: string) => void` | — | 値変更コールバック |
| `oninput` | `(value: string) => void` | — | Form 連携用の入力イベント |
| `onblur` | `() => void` | — | Form 連携用のブラーイベント |
| `visible` | `boolean` | — | 制御モード: パスワードの表示状態 |
| `defaultVisible` | `boolean` | `false` | 非制御モード: 初期表示状態 |
| `onVisibleChange` | `(visible: boolean) => void` | — | 表示状態変更コールバック |
| `disabled` | `boolean` | `false` | 無効化 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `name` | `string` | — | フォーム用の name 属性 |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | サイズ |
| `variant` | `"outline" \| "filled" \| "flushed"` | `"outline"` | 外観バリエーション |
| `width` | `string` | — | コンテナの幅（CSS値） |

### PasswordInput.Input

| Prop | 型 | 説明 |
|------|-----|------|
| `placeholder` | `string` | プレースホルダーテキスト |

### PasswordInput.VisibilityTrigger

表示/非表示を切り替えるトグルボタン。children を渡すとカスタムアイコンに置き換え可能。

### PasswordInput.Label

入力フィールドのラベル。

### PasswordInput.StrengthMeter

| Prop | 型 | 説明 |
|------|-----|------|
| `value` | `number` | パスワード強度（0〜4）。0=空、1=弱い、2=やや弱い、3=普通、4=強い |

## キーボード操作

なし（標準のテキスト入力操作に準ずる）。

## アクセシビリティ

- VisibilityTrigger は `aria-label` でパスワードの表示/非表示状態を通知
- Input は `autocomplete="current-password"` を設定
- disabled / readOnly 状態が正しく伝達される
