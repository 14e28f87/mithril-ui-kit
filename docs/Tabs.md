# Tabs

<script setup>
import { setup as basicDemo } from './demos/tabs/basic'
import { setup as controlledDemo } from './demos/tabs/controlled'
import { setup as verticalDemo } from './demos/tabs/vertical'

import basicCode from './demos/tabs/basic.tsx?raw'
import controlledCode from './demos/tabs/controlled.tsx?raw'
import verticalCode from './demos/tabs/vertical.tsx?raw'
</script>

## 概要

`Tabs` は `Tabs.Root`, `Tabs.List`, `Tabs.Trigger`, `Tabs.Content` を組み合わせて使う compound component 型のタブです。表示中のパネル切り替えだけでなく、`activationMode` によるキーボード操作の制御、`lazyMount` / `unmountOnExit` による描画コスト調整、`orientation` による縦配置にも対応しています。

::: tip
旧タブ UI（`TabsClassic`）は `mithriluikit-dev` パッケージに移動しました。
:::

## Usage 使用例

### 基本

監視画面のように、複数の情報パネルをひとつの領域で切り替える基本パターンです。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 制御モード

`value` と `onValueChange` を使うと、外部ボタンや URL 状態と同期したタブ制御ができます。

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

### 縦配置

`orientation="vertical"` を使うと、設定画面のサイドナビ風レイアウトにできます。

<MithrilDemo :setup="verticalDemo" :code="verticalCode" />

## API Reference

### Tabs.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 制御モード時の選択中タブです |
| `defaultValue` | `string` | — | 非制御モード時の初期タブです |
| `onValueChange` | `(details: { value: string }) => void` | — | タブ変更時に呼ばれます |
| `variant` | `"line" \| "subtle" \| "enclosed" \| "outline" \| "plain"` | `"line"` | タブ見出しの見た目です |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | タブの高さと文字サイズです |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | タブの並び方向です |
| `activationMode` | `"automatic" \| "manual"` | `"automatic"` | フォーカス移動時に即選択するか、Enter / Space で確定するかを切り替えます |
| `lazyMount` | `boolean` | `false` | 未表示パネルの初回描画を遅延します |
| `unmountOnExit` | `boolean` | `false` | 非アクティブパネルを DOM から外します |
| `loopFocus` | `boolean` | `true` | キーボード移動で末尾から先頭、先頭から末尾へループさせます |
| `fitted` | `boolean` | `false` | タブを均等幅にします |
| `id` | `string` | 自動生成 | ARIA 連携に使うルート id です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | ルートのインラインスタイルです |

### Tabs.List Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | タブリストに追加するクラスです |
| `style` | `Record<string, string>` | — | タブリストのインラインスタイルです |

### Tabs.Trigger Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 対応するタブ値です |
| `disabled` | `boolean` | `false` | 個別に無効化します |
| `class` | `string` | — | トリガーに追加するクラスです |
| `style` | `Record<string, string>` | — | トリガーのインラインスタイルです |

### Tabs.Content Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | 対応するタブ値です |
| `class` | `string` | — | コンテンツに追加するクラスです |
| `style` | `Record<string, string>` | — | コンテンツのインラインスタイルです |

### Tabs.Indicator Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | — | 互換用の追加クラスです |
| `style` | `Record<string, string>` | — | 互換用のインラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Tabs.Root` | 状態管理、ARIA 属性、キーボード操作を管理するルートです |
| `Tabs.List` | タブ見出しの並びを定義します |
| `Tabs.Trigger` | 個々のタブ切り替えボタンです |
| `Tabs.Content` | 対応するパネル本文です |
| `Tabs.Indicator` | API 互換用に export されているマーカーです |

## 補足

`Tabs.Indicator` は export されていますが、現行実装では `line` や `enclosed` などの見た目を `Tabs.Root` / `Tabs.Trigger` 側で描画しているため、通常は明示的に配置する必要はありません。
