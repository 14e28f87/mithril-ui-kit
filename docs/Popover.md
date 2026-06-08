# Popover

<script setup>
import { setup as basicDemo } from './demos/popover/basic'
import basicCode from './demos/popover/basic.tsx?raw'
import { setup as asChildDemo } from './demos/popover/as-child'
import asChildCode from './demos/popover/as-child.tsx?raw'
</script>

## 概要

`Popover` はクリックで開くリッチコンテンツ向けの compound component 型ポップオーバーです。タイトル・ボディ・フッター・閉じるボタンを組み合わせて構造化コンテンツを表示できます。`placement` で表示方向を指定でき、制御/非制御の両モードに対応しています。

## 基本デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## asChild デモ

`asChild` を使うと `Popover.Trigger` や `Popover.CloseTrigger` の既定 `<button>` ラッパーを使わず、渡した子要素をそのままトリガーとして利用できます。

<MithrilDemo :setup="asChildDemo" :code="asChildCode" />

## Usage 使用例

### 基本

```tsx
<Popover.Root placement="bottom" size="md">
  <Popover.Trigger>開く</Popover.Trigger>
  <Popover.Content>
    <Popover.Arrow />
    <Popover.Header>見出し</Popover.Header>
    <Popover.Body>本文</Popover.Body>
    <Popover.Footer>
      <Popover.CloseTrigger>閉じる</Popover.CloseTrigger>
    </Popover.Footer>
  </Popover.Content>
</Popover.Root>
```

### asChild — カスタム要素をトリガーに使う

`asChild` を指定すると、子要素に `onclick` と aria 属性がマージされます。子要素が持つ既存の `onclick` は保持されます。

```tsx
import { Button, Popover } from "mithril-ui-kit";

// Trigger を Button コンポーネントに差し替える
<Popover.Root placement="bottom">
  <Popover.Trigger asChild>
    <Button variant="outline" size="sm">詳細を開く</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header>タイトル</Popover.Header>
    <Popover.Body>内容</Popover.Body>
    <Popover.Footer>
      <Popover.CloseTrigger asChild>
        <Button variant="subtle" size="xs">閉じる</Button>
      </Popover.CloseTrigger>
    </Popover.Footer>
  </Popover.Content>
</Popover.Root>
```

## API Reference

### Popover.Root

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `open` | `boolean` | — | 制御モード: 開閉状態 |
| `defaultOpen` | `boolean` | `false` | 非制御モード: 初期開閉状態 |
| `onOpenChange` | `(details: { open: boolean }) => void` | — | 開閉コールバック |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | 表示方向 |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | コンテンツサイズ |
| `closeOnEscape` | `boolean` | `true` | Escape キーで閉じる |
| `closeOnInteractOutside` | `boolean` | `true` | 外部クリックで閉じる |
| `autoFocus` | `boolean` | — | オートフォーカス有効 |
| `class` | `string` | — | ルート要素の追加クラス |
| `style` | `Record<string, string>` | — | ルート要素のインラインスタイル |

### Popover.Trigger

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `asChild` | `boolean` | `false` | 子要素をそのままトリガーとして使う。`onclick`・aria 属性がマージされる |
| `class` | `string` | — | 追加クラス（`asChild=false` 時のみ適用） |
| `style` | `Record<string, string>` | — | インラインスタイル（`asChild=false` 時のみ適用） |

### Popover.Content

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `class` | `string` | — | コンテンツ要素の追加クラス |
| `style` | `Record<string, string>` | — | インラインスタイル |

### Popover.Header / Popover.Body / Popover.Title / Popover.Footer

各パートは `class` と `style` を受け付けます。

### Popover.CloseTrigger

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `asChild` | `boolean` | `false` | 子要素をそのままトリガーとして使う。`onclick` がマージされる |
| `class` | `string` | — | 追加クラス（`asChild=false` 時のみ適用） |
| `style` | `Record<string, string>` | — | インラインスタイル（`asChild=false` 時のみ適用） |

### Popover.Arrow

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `class` | `string` | — | 追加クラス |
| `style` | `Record<string, string>` | — | インラインスタイル |
