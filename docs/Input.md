# Input

<script setup>
import { setup as basicDemo } from './demos/input/basic'
import basicCode from './demos/input/basic.tsx?raw'
</script>

## 概要

シンプルなテキスト入力コンポーネント。Bootstrap5 の form-control クラスを自動付与。リアルタイム入力値の同期、blur または Enter キー時の確定処理。

## Usage 使用例

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Props

- `value?: string | null` - 入力値
- `oninput?: (v: string | null) => void` - 入力時のコールバック
- `placeholder?: string` - プレースホルダー
- `class?: string` - 追加 CSS クラス
- `onblur?: () => void` - フォーカス喪失時のコールバック
- `type?: string` - input タイプ（デフォルト: "text"）
- `disabled?: boolean` - 無効化フラグ
- `id?: string` - input 要素の ID

## 使用例

```tsx
<Input
  value={state.username}
  oninput={(v) => state.username = v}
  placeholder="ユーザー名を入力"
/>
```