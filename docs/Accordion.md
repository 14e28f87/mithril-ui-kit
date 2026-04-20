# Accordion

<script setup>
import { setup as basicDemo } from './demos/accordion/basic'
import { setup as multipleDemo } from './demos/accordion/multiple'
import { setup as controlledDemo } from './demos/accordion/controlled'
import { setup as orientationDemo } from './demos/accordion/orientation'

import basicCode from './demos/accordion/basic.tsx?raw'
import multipleCode from './demos/accordion/multiple.tsx?raw'
import controlledCode from './demos/accordion/controlled.tsx?raw'
import orientationCode from './demos/accordion/orientation.tsx?raw'
</script>

## 概要

`Accordion` は、コンテンツを縦方向に積み重ねて表示するための、折りたたみ可能な compound component です。

以下のサブコンポーネントで構成されます:

- `Accordion.Root` — ルートコンテナ。展開状態管理・キーボードナビゲーションを担う
- `Accordion.Item` — 個々のアコーディオン項目
- `Accordion.ItemTrigger` — 開閉トリガーボタン
- `Accordion.ItemContent` — 開閉されるコンテンツ領域
- `Accordion.ItemBody` — コンテンツの本文
- `Accordion.ItemIndicator` — 開閉状態を示す矢印インジケーター

`multiple` / `collapsible` / `value` / `defaultValue` / `onValueChange` で柔軟な展開制御を行えます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 複数展開

`multiple` を指定すると、複数の項目を同時に開くことができます。

<MithrilDemo :setup="multipleDemo" :code="multipleCode" />

### 制御モード

`value` と `onValueChange` を使うと、外部から展開状態を完全に制御できます。

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

### orientation（横スクロールキーボードナビゲーション）

`orientation="horizontal"` を指定すると、キーボードナビゲーションが `ArrowLeft` / `ArrowRight` に変わります。

<MithrilDemo :setup="orientationDemo" :code="orientationCode" />

## API Reference

### Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `false` | 複数項目を同時に展開できるようにします。`false` の場合、一度に 1 つの項目しか開けません |
| `collapsible` | `boolean` | `false` | 単一展開モード (`multiple=false`) で、開いている項目をクリックして閉じることを許可します。`false` の場合、常に 1 つは開いた状態を維持します |
| `value` | `AccordionValue \| AccordionValue[]` | — | 制御モードで使用します。現在展開中の項目の value を指定します。配列で複数指定可能（`multiple=true` 時） |
| `defaultValue` | `AccordionValue \| AccordionValue[]` | — | 非制御モードで使用します。初期表示時に展開する項目の value を指定します |
| `onValueChange` | `(details: { value, indices }) => void` | — | 展開状態が変わったときに呼ばれるコールバック。`details.value` は展開中の value 配列、`details.indices` はインデックス配列 |
| `onFocusChange` | `(details: { value, index }) => void` | — | トリガーにフォーカスが移動したとき呼ばれるコールバック |
| `disabled` | `boolean` | `false` | すべての項目を一括で無効化します。個別無効化は `Item` 側の `disabled` を使います |
| `lazyMount` | `boolean` | `false` | `true` にすると、一度も展開されていない項目のコンテンツ DOM を生成しません。大量の項目がある場合のパフォーマンス最適化に有効です |
| `unmountOnExit` | `boolean` | `false` | `true` にすると、閉じた項目のコンテンツ DOM を即座に破棄します。`lazyMount` と併用するとさらに効果的です |
| `variant` | `"outline" \| "subtle" \| "enclosed" \| "plain"` | `"outline"` | 見た目のバリエーション。`outline`: 枠線付き、`subtle`: 淡い背景色、`enclosed`: 強調枠線＋影、`plain`: 仕切り線のみ |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | コンポーネントのサイズ。パディングとフォントサイズが変わります |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | キーボードナビゲーションの方向。`vertical` は ArrowUp/Down、`horizontal` は ArrowLeft/Right で項目間を移動します |
| `ids` | `Partial<{ root, item, itemContent, itemTrigger }>` | — | ARIA 属性用のカスタム ID 生成関数。テスト時やポータル使用時に便利です |
| `id` | `string` | — | ルート要素の id 属性 |
| `class` | `string` | — | ルート要素に付与する追加 CSS クラス |
| `style` | `Record<string, string>` | — | ルート要素に付与するインラインスタイル |

### Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| number` | (インデックス) | 項目の識別値。値変更イベントの value 配列に含まれます。省略すると 0 始まりのインデックスが自動で割り当てられます |
| `disabled` | `boolean` | `false` | この項目を無効化します。トリガーがクリック不可になり、キーボードナビゲーションでもスキップされます |
| `class` | `string` | — | 項目要素に対する追加 CSS クラス |
| `style` | `Record<string, string>` | — | 項目要素に対するインラインスタイル |

## アクセシビリティ

- `aria-expanded`, `aria-controls`, `aria-labelledby` を自動設定
- `ArrowUp` / `ArrowDown` (vertical) または `ArrowLeft` / `ArrowRight` (horizontal) で項目間移動
- `Home` / `End` で先頭・末尾へジャンプ
- `Enter` / `Space` で開閉
- `Accordion.ItemIndicator` は開閉状態に応じて 180° 回転します
