# Modal

<script setup>
import { setup as basicDemo } from './demos/modal/basic'
import basicCode from './demos/modal/basic.tsx?raw'
</script>

## 概要

モーダルコンポーネント。**命令的 API**（`Modal.show()`）と**宣言的 API**（JSX compound component）の 2 つの使い方をサポート。

> レガシーの Bootstrap 5 スタイルモーダル（`ModalClassic`）は旧 API です。このページでは current API を案内します。

| 特徴 | 説明 |
|------|------|
| サイズ | `xs`, `sm`, `md`, `lg`, `xl`, `cover`, `full` の 7 段階 |
| 配置 | `top`（デフォルト）, `center`, `bottom` |
| スクロール | `outside`（デフォルト）, `inside` |
| アニメーション | `scale`（デフォルト）, `none` |
| キーボード | Escape キーで閉じる（デフォルト有効） |
| 外側クリック | バックドロップクリックで閉じる（デフォルト有効） |

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## 使い方 — 命令的 API（Modal.show）

`Modal.show()` は Promise を返す。コンテンツコンポーネントには `resolve` と `hide` が attrs に注入される。

```tsx
import { Modal } from 'mithril-ui-kit';

const result = await Modal.show<boolean>({
  size: "md",
  placement: "center",
  content: {
    view(vnode) {
      return (
        <div>
          <Modal.Header>
            <Modal.Title>確認</Modal.Title>
            <Modal.CloseTrigger />
          </Modal.Header>
          <Modal.Body>
            <p>削除しますか？</p>
          </Modal.Body>
          <Modal.Footer>
            <button onclick={() => vnode.attrs.hide()}>キャンセル</button>
            <button onclick={() => vnode.attrs.resolve(true)}>OK</button>
          </Modal.Footer>
        </div>
      );
    }
  }
});

console.log(result); // true or false
```

## 使い方 — 宣言的 API（JSX Compound Component）

```tsx
import { Modal, Portal } from 'mithril-ui-kit';

let open = false;

// view 内で
<Modal.Root
  open={open}
  onOpenChange={(d) => { open = d.open; }}
  size="md"
  placement="center"
>
  <Modal.Trigger asChild>
    <button>開く</button>
  </Modal.Trigger>
  <Portal>
    <Modal.Backdrop />
    <Modal.Positioner>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>タイトル</Modal.Title>
          <Modal.CloseTrigger />
        </Modal.Header>
        <Modal.Body>コンテンツ</Modal.Body>
        <Modal.Footer>
          <button onclick={() => { open = false; }}>閉じる</button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Positioner>
  </Portal>
</Modal.Root>
```

## Props

### ModalShowOptions（命令的 API）

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `content` | `m.ComponentTypes<any>` | **必須** | モーダル内に表示するコンポーネント |
| `attrs` | `Record<string, any>` | `{}` | content に渡す追加の attrs |
| `size` | `ModalSize` | `"md"` | サイズ |
| `placement` | `ModalPlacement` | `"top"` | 配置 |
| `scrollBehavior` | `ModalScrollBehavior` | `"outside"` | スクロール動作 |
| `motionPreset` | `ModalMotionPreset` | `"scale"` | アニメーション |
| `closeOnEscape` | `boolean` | `true` | Escape キーで閉じるか |
| `closeOnInteractOutside` | `boolean` | `true` | 外側クリックで閉じるか |
| `role` | `"dialog" \| "alertdialog"` | `"dialog"` | ARIA role |

### ModalRootAttrs（宣言的 API）

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `open` | `boolean` | - | 開閉状態（制御モード） |
| `defaultOpen` | `boolean` | `false` | 初期表示状態（非制御モード） |
| `onOpenChange` | `(details) => void` | - | 開閉状態変更コールバック |
| `size` | `ModalSize` | `"md"` | サイズ |
| `placement` | `ModalPlacement` | `"top"` | 配置 |
| `scrollBehavior` | `ModalScrollBehavior` | `"outside"` | スクロール動作 |
| `motionPreset` | `ModalMotionPreset` | `"scale"` | アニメーション |
| `closeOnEscape` | `boolean` | `true` | Escape キーで閉じるか |
| `closeOnInteractOutside` | `boolean` | `true` | 外側クリックで閉じるか |
| `role` | `"dialog" \| "alertdialog"` | `"dialog"` | ARIA role |
| `preventScroll` | `boolean` | `true` | 背後のスクロール防止 |

### ModalContentInjectedAttrs（show() でコンテンツに注入される属性）

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `resolve(value)` | `(value: T) => void` | 値を返してモーダルを閉じる |
| `hide()` | `() => void` | モーダルを閉じる（false を返す） |

## サブコンポーネント一覧

| コンポーネント | 説明 |
|---------------|------|
| `Modal.Root` | ルートコンポーネント（宣言的 API 用） |
| `Modal.Trigger` | モーダルを開くトリガー |
| `Modal.Backdrop` | バックドロップ（半透明背景） |
| `Modal.Positioner` | ポジショニングコンテナ |
| `Modal.Content` | モーダル本体 |
| `Modal.Header` | ヘッダー |
| `Modal.Title` | タイトル（h2） |
| `Modal.Description` | 説明文（p） |
| `Modal.Body` | ボディ |
| `Modal.Footer` | フッター |
| `Modal.CloseTrigger` | 閉じるボタン（×） |
| `Modal.ActionTrigger` | アクション＋閉じるトリガー |

## サイズ一覧

| サイズ | 幅 |
|-------|-----|
| `xs` | 320px |
| `sm` | 400px |
| `md` | 500px |
| `lg` | 700px |
| `xl` | 900px |
| `cover` | 100vw - 2rem |
| `full` | 100vw（全画面） |