# Steps

<script setup>
import { setup as basicDemo } from './demos/steps/basic'
import { setup as controlledDemo } from './demos/steps/controlled'
import { setup as verticalDemo } from './demos/steps/vertical'

import basicCode from './demos/steps/basic.tsx?raw'
import controlledCode from './demos/steps/controlled.tsx?raw'
import verticalCode from './demos/steps/vertical.tsx?raw'
</script>

## 概要

`Steps` は `Steps.List`, `Steps.Item`, `Steps.Trigger`, `Steps.Content` を組み合わせて進行状況を表す compound component です。現在ステップの表示だけでなく、完了済み状態の可視化、`PrevTrigger` / `NextTrigger` による前後移動、`linear` による順序制約、`orientation` による縦配置に対応しています。

::: tip
旧ステッパー（`StepsClassic`）は `mithriluikit-dev` パッケージに移動しました。
:::

## Usage 使用例

### 基本

手順の流れと、現在の本文を同じ画面で見せる基本パターンです。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 制御モード

`step` と `onStepChange` を使うと、外部状態と同期したステップ管理やリセット処理を実装できます。

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

### 縦配置

`orientation="vertical"` は、設定ウィザードや作業手順のサイド表示に向いています。

<MithrilDemo :setup="verticalDemo" :code="verticalCode" />

## API Reference

### Steps.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `count` | `number` | — | ステップ総数です |
| `step` | `number` | — | 制御モード時の現在ステップです。0 始まりです |
| `defaultStep` | `number` | `0` | 非制御モード時の初期ステップです |
| `onStepChange` | `(details: { step: number }) => void` | — | ステップ変更時に呼ばれます |
| `onStepComplete` | `() => void` | — | 完了状態に入ったときに呼ばれます |
| `linear` | `boolean` | `false` | 未来のステップへの直接移動を禁止します |
| `variant` | `"solid" \| "subtle"` | `"solid"` | ステッパーの見た目です |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | インジケーターと文字サイズです |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | ステップの並び方向です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | ルートのインラインスタイルです |

### Steps.Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `number` | — | 対応するステップ番号です。0 始まりです |
| `class` | `string` | — | 項目に追加するクラスです |
| `style` | `Record<string, string>` | — | 項目のインラインスタイルです |

### Steps.Content Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `number` | — | 対応するステップ番号です |
| `class` | `string` | — | コンテンツに追加するクラスです |
| `style` | `Record<string, string>` | — | コンテンツのインラインスタイルです |

### ナビゲーション系 Props

| Component | Props |
| --- | --- |
| `Steps.List` | `class?: string`, `style?: Record<string, string>` |
| `Steps.Trigger` | `class?: string`, `style?: Record<string, string>` |
| `Steps.Indicator` | `class?: string`, `style?: Record<string, string>` |
| `Steps.Separator` | `class?: string`, `style?: Record<string, string>` |
| `Steps.CompletedContent` | `class?: string`, `style?: Record<string, string>` |
| `Steps.Title` | `class?: string`, `style?: Record<string, string>` |
| `Steps.Description` | `class?: string`, `style?: Record<string, string>` |
| `Steps.PrevTrigger` | `class?: string`, `style?: Record<string, string>` |
| `Steps.NextTrigger` | `class?: string`, `style?: Record<string, string>` |

### Subcomponents

| Component | Description |
| --- | --- |
| `Steps.Root` | 現在位置と完了状態を管理するルートです |
| `Steps.List` | ステップ一覧全体です |
| `Steps.Item` | 1 件ぶんのステップ項目です |
| `Steps.Trigger` | ステップ選択ボタンです |
| `Steps.Indicator` | 番号や完了状態を示す丸インジケーターです |
| `Steps.Separator` | 項目間の接続線です |
| `Steps.Content` | 現在ステップに対応する本文です |
| `Steps.CompletedContent` | 完了時に表示する本文です |
| `Steps.Title` | ステップ名です |
| `Steps.Description` | 補足説明です |
| `Steps.PrevTrigger` | 前のステップへ戻るボタンです |
| `Steps.NextTrigger` | 次のステップへ進むボタンです |
