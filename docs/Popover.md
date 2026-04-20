# Popover

<script setup>
import { setup as basicDemo } from './demos/popover/basic'
import basicCode from './demos/popover/basic.tsx?raw'
</script>

## 概要

`Popover` はクリックで開くリッチコンテンツ向けの compound component ポップオーバーです。

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## Props

- `open?` / `defaultOpen?` - 制御 / 非制御の開閉状態
- `onOpenChange?` - 開閉コールバック
- `placement?: "top" | "bottom" | "left" | "right"`
- `size?: "xs" | "sm" | "md" | "lg"`
- `closeOnEscape?`, `closeOnInteractOutside?`, `autoFocus?`

## 使用例

```tsx
<Popover.Root placement="bottom">
  <Popover.Trigger>開く</Popover.Trigger>
  <Popover.Content>
    <Popover.Header>見出し</Popover.Header>
    <Popover.Body>本文</Popover.Body>
    <Popover.Footer>
      <Popover.CloseTrigger>閉じる</Popover.CloseTrigger>
    </Popover.Footer>
  </Popover.Content>
</Popover.Root>
```
