# Button

<script setup>
import { setup as basicDemo } from './demos/button/basic'
import basicCode from './demos/button/basic.tsx?raw'
</script>

## 概要

`Button` はアクションを実行するための基本コンポーネントです。`loading` と `loadingText` で処理中の状態を明示でき、`ButtonGroup` を併用すると関連アクションをひとかたまりに配置できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Button Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"solid" \| "subtle" \| "surface" \| "outline" \| "ghost" \| "plain"` | `"solid"` | ボタンの見た目です |
| `size` | `"2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | ボタンサイズです |
| `colorPalette` | `string` | — | カラー CSS 変数へ反映する色です |
| `disabled` | `boolean` | `false` | 無効化します |
| `loading` | `boolean` | `false` | ローディング状態にします |
| `loadingText` | `string` | — | ローディング中に表示するテキストです |
| `spinnerPlacement` | `"start" \| "end"` | `"start"` | ローディングスピナー位置です |
| `rounded` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | — | 角丸を上書きします |
| `as` | `string` | `"button"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `onclick` | `(e: Event) => void` | — | クリック時に呼ばれます |

### ButtonGroup Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `attached` | `boolean` | `false` | 子ボタンを接着した見た目にします |
| `size` | `ButtonSize` | — | サイズの意図を揃えるための補助 props です |
| `variant` | `ButtonVariant` | — | バリアントの意図を揃えるための補助 props です |
| `gap` | `string \| number` | — | 非接着時の間隔です |
| `class` | `string` | — | 追加クラスです |