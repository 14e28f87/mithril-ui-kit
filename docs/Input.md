# Input

<script setup>
import { setup as basicDemo } from './demos/input/basic'
import { setup as typesDemo } from './demos/input/types'

import basicCode from './demos/input/basic.tsx?raw'
import typesCode from './demos/input/types.tsx?raw'
</script>

## 概要

`Input` はシンプルなテキスト入力コンポーネントです。

Bootstrap 5 の `form-control` クラスを自動付与します。リアルタイムの入力値同期と、`blur` または `Enter` キー時の値確定処理を内蔵しています。`FormItem` と組み合わせると `value` / `oninput` / `onblur` が自動注入され、バリデーション連携が機能します。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### タイプ / 状態

`type` で `password` など HTML 標準の input type を指定できます。`disabled` で無効化できます。

<MithrilDemo :setup="typesDemo" :code="typesCode" />

## API Reference

### InputAttrs（Props）

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| null` | — | 入力値。`null` を渡すと空文字として扱います |
| `oninput` | `(v: string \| null) => void` | — | 入力時のコールバック。空文字のときは `null` を渡します |
| `placeholder` | `string` | — | プレースホルダーテキスト |
| `type` | `string` | `"text"` | HTML input の type 属性（`"text"`, `"password"`, `"email"` など） |
| `disabled` | `boolean` | `false` | 入力を無効化します |
| `id` | `string` | — | input 要素の `id` 属性。`FormItem` の `label` と関連付けるときに使います |
| `class` | `string` | — | 追加 CSS クラス。`FormItem` から `is-invalid` が自動付与されます |
| `onblur` | `() => void` | — | フォーカスが外れたときのコールバック |

## アクセシビリティ

- `Enter` キーで入力値が確定されます（`oninput` コールバックが呼ばれます）
- `blur` 時にも末尾の空白をトリムして値を確定します
- `FormItem` と組み合わせると `is-invalid` クラスが自動付与され、Bootstrap のエラースタイルが適用されます
