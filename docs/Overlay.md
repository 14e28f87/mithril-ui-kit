# Overlay

<script setup>
import { setup as basicDemo } from './demos/overlay/basic'
import basicCode from './demos/overlay/basic.tsx?raw'
</script>

## 概要

オーバーレイコンポーネントの基盤クラス。Modal、Drawer、Toast など、画面上にオーバーレイ表示されるコンポーネントの共通基盤として機能。Mithril コンポーネントをオーバーレイとして表示し、表示・非表示の制御、イベント処理、ライフサイクル管理を行う。

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## Props (OverlayOptions)

- `closeOnEscapeKey?: boolean` - Escape キー押下時にオーバーレイを閉じるかどうか（デフォルト: true）
- `closeOnOutsideClick?: boolean` - オーバーレイ外クリック時に閉じるかどうか（デフォルト: false）
- `hasBackdrop?: boolean` - 背景にバックドロップ（半透明の黒い背景）を表示するかどうか（デフォルト: true）
- `inline?: boolean` - インライン表示（document.body に追加せず、返り値として使用）（デフォルト: false）

## 使用例

```tsx
import { Overlay } from 'mithriluikit';

const overlay = new Overlay(ModalComponent, {
  closeOnEscapeKey: true,
  closeOnOutsideClick: false
});
overlay.show();
```