# Offcanvas

<script setup>
import { setup as basicDemo } from './demos/offcanvas/basic'
import basicCode from './demos/offcanvas/basic.tsx?raw'
</script>

## 概要

Chakra UI Drawer 風の compound オフキャンバスコンポーネント。**命令的 API**（`Offcanvas.show()` / `Offcanvas2.show()`）と**宣言的 API**（JSX compound component）の 2 つの使い方をサポート。

> **Note:** `Offcanvas` と `Offcanvas2` は同一コンポーネントです。`Offcanvas2` は後方互換のエイリアスとして引き続き使用可能です。  
> レガシーの Bootstrap 5 スタイルオフキャンバス（`OffcanvasClassic`）は `mithriluikit-dev` パッケージに移動しました。

| 特徴 | 説明 |
|------|------|
| サイズ | `sm`, `md`, `lg`, `xl`, `full` の 5 段階 |
| 配置 | `start`, `end`（デフォルト）, `top`, `bottom` |
| アニメーション | 配置に応じたスライド |
| キーボード | Escape キーで閉じる（デフォルト有効） |
| 外側クリック | バックドロップクリックで閉じる（デフォルト有効） |

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## 使い方 — 命令的 API（Offcanvas.show）

`Offcanvas.show()` は Promise を返す。コンテンツコンポーネントには `resolve` と `hide` が attrs に注入される。

```tsx
import { Offcanvas } from 'mithriluikit';

const result = await Offcanvas.show<boolean>({
  size: "md",
  placement: "end",
  content: {
    view(vnode) {
      return (
        <Offcanvas.Content>
          <Offcanvas.Header>
            <Offcanvas.Title>メニュー</Offcanvas.Title>
            <Offcanvas.CloseTrigger />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>Offcanvas の内容</p>
          </Offcanvas.Body>
          <Offcanvas.Footer>
            <button onclick={() => vnode.attrs.hide()}>閉じる</button>
            <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
          </Offcanvas.Footer>
        </Offcanvas.Content>
      );
    }
  }
});

console.log(result); // true or false
```

## 使い方 — 宣言的 API（JSX Compound Component）

```tsx
import { Offcanvas } from 'mithriluikit';

let open = false;

// view 内で
<Offcanvas.Root
  open={open}
  onOpenChange={(d) => { open = d.open; }}
  size="md"
  placement="end"
>
  <Offcanvas.Trigger asChild>
    <button>開く</button>
  </Offcanvas.Trigger>
  <Offcanvas.Backdrop />
  <Offcanvas.Positioner>
    <Offcanvas.Content>
      <Offcanvas.Header>
        <Offcanvas.Title>メニュー</Offcanvas.Title>
        <Offcanvas.CloseTrigger />
      </Offcanvas.Header>
      <Offcanvas.Body>コンテンツ</Offcanvas.Body>
      <Offcanvas.Footer>
        <button onclick={() => { open = false; }}>閉じる</button>
      </Offcanvas.Footer>
    </Offcanvas.Content>
  </Offcanvas.Positioner>
</Offcanvas.Root>
```

## Props

### OffcanvasShowOptions

命令的 API `Offcanvas.show(options)` に渡すオプション。

| Prop | 型 | デフォルト | 説明 |
|------|----|-----------|------|
| `content` | `m.ComponentTypes` | **必須** | Offcanvas に表示するコンポーネント |
| `size` | `OffcanvasSize` | `"md"` | Offcanvas のサイズ |
| `placement` | `OffcanvasPlacement` | `"end"` | 表示位置 |
| `closeOnEscape` | `boolean` | `true` | Escape キーで閉じるか |
| `closeOnInteractOutside` | `boolean` | `true` | 外側クリックで閉じるか |

### OffcanvasRootAttrs

宣言的 API `<Offcanvas.Root>` に渡す Props。

| Prop | 型 | デフォルト | 説明 |
|------|----|-----------|------|
| `open` | `boolean` | **必須** | Offcanvas の開閉状態 |
| `onOpenChange` | `(details: OffcanvasOpenChangeDetails) => void` | — | 開閉状態変更コールバック |
| `size` | `OffcanvasSize` | `"md"` | サイズ |
| `placement` | `OffcanvasPlacement` | `"end"` | 配置 |
| `closeOnEscape` | `boolean` | `true` | Escape キーで閉じるか |
| `closeOnInteractOutside` | `boolean` | `true` | 外側クリックで閉じるか |

## サブコンポーネント

| コンポーネント | 説明 |
|---------------|------|
| `Offcanvas.Root` | 状態管理ルート（宣言的 API） |
| `Offcanvas.Trigger` | 開くトリガーボタン |
| `Offcanvas.Backdrop` | 半透明のバックドロップ |
| `Offcanvas.Positioner` | Content の配置制御 |
| `Offcanvas.Content` | Offcanvas のメインコンテナ |
| `Offcanvas.Header` | ヘッダー |
| `Offcanvas.Title` | タイトル |
| `Offcanvas.Body` | ボディ（スクロール可能） |
| `Offcanvas.Footer` | フッター |
| `Offcanvas.CloseTrigger` | 閉じるボタン |

## サイズ

| 値 | start/end | top/bottom |
|----|-----------|------------|
| `sm` | 幅 280px | 高さ 200px |
| `md` | 幅 380px | 高さ 300px |
| `lg` | 幅 500px | 高さ 400px |
| `xl` | 幅 700px | 高さ 500px |
| `full` | 幅 100% | 高さ 100% |

## 配置

| 値 | 説明 | アニメーション |
|----|------|--------------|
| `start` | 左から表示 | スライドイン（左） |
| `end` | 右から表示（デフォルト） | スライドイン（右） |
| `top` | 上から表示 | スライドイン（上） |
| `bottom` | 下から表示 | スライドイン（下） |
| `center` | 中央に表示 | スケールイン |
