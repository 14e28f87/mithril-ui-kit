# Tooltip

<script setup>
import { setup as basicDemo } from './demos/tooltip/basic'
import { setup as interactiveDemo } from './demos/tooltip/interactive'
import { setup as controlledDemo } from './demos/tooltip/controlled'

import basicCode from './demos/tooltip/basic.tsx?raw'
import interactiveCode from './demos/tooltip/interactive.tsx?raw'
import controlledCode from './demos/tooltip/controlled.tsx?raw'
</script>

## 概要

`Tooltip` はホバーまたはフォーカス時に補足情報を浮かせて表示する compound component です。`placement` による表示方向、`openDelay` / `closeDelay` による遅延調整、`interactive` によるコンテンツ内ホバー保持に対応しており、ラベルだけでは説明しきれない UI の補助表示に向いています。

::: tip
旧ツールチップ（`TooltipClassic`）は `mithriluikit-dev` パッケージに移動しました。
:::

## Usage 使用例

### 基本

ボタンやラベルに短い補足情報を付ける基本パターンです。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### interactive コンテンツ

`interactive` を有効にすると、ツールチップ本体へマウスを載せても閉じにくくなります。

<MithrilDemo :setup="interactiveDemo" :code="interactiveCode" />

### 制御モード

`open` と `onOpenChange` を使うと、外部トグルやアプリ状態と同期できます。

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

## API Reference

### Tooltip.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | — | 制御モード時の開閉状態です |
| `defaultOpen` | `boolean` | `false` | 非制御モード時の初期状態です |
| `onOpenChange` | `(details: { open: boolean }) => void` | — | 開閉状態変更時に呼ばれます |
| `openDelay` | `number` | `400` | 表示までの遅延ミリ秒です |
| `closeDelay` | `number` | `150` | 非表示までの遅延ミリ秒です |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | 表示位置です |
| `disabled` | `boolean` | `false` | ツールチップを無効化します |
| `interactive` | `boolean` | `false` | コンテンツ上のホバー中は閉じにくくします |
| `showArrow` | `boolean` | `false` | 既定の矢印を表示します |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | ルートのインラインスタイルです |

### Tooltip.Trigger Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | トリガー要素に追加するクラスです |
| `style` | `Record<string, string>` | — | トリガー要素のインラインスタイルです |

### Tooltip.Content Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | コンテンツに追加するクラスです |
| `style` | `Record<string, string>` | — | コンテンツのインラインスタイルです |

### Tooltip.Arrow Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | 互換用の追加クラスです |
| `style` | `Record<string, string>` | — | 互換用のインラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Tooltip.Root` | 開閉状態と遅延を管理するルートです |
| `Tooltip.Trigger` | ホバー / フォーカス起点になる要素です |
| `Tooltip.Content` | 表示される本文です |
| `Tooltip.Arrow` | API 互換用のマーカーです |

## 補足

現行実装では、矢印の表示は `showArrow` prop で制御されます。`Tooltip.Arrow` は export されていますが、通常は明示的に children へ配置する必要はありません。
