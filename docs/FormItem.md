# FormItem

<script setup>
import { setup as basicDemo } from './demos/form-item/basic'

import basicCode from './demos/form-item/basic.tsx?raw'
</script>

## 概要

`FormItem` は `Form` と子コンポーネント（`Input` など）を仲介するコンポーネントです。

フィールドの登録・解除、子コンポーネントへの `value` / `oninput` / `onblur` の自動注入、`is-invalid` クラスの付与、エラーメッセージの表示を担当します。`rules` を設定することでインライン・バリデーションが機能します。

サブコンポーネントは以下で構成されます:

- `FormItem` — ラベル・エラーメッセージを含む `<div class="mb-3">` のラッパー

## Usage 使用例

### バリデーション

`rules` に `required` / `min` / `max` / `validator` を組み合わせてバリデーションを定義できます。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### FormItemAttrs（Props）

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | — | フィールド名。`Form` へのフィールド登録キーです。フォーム連携には必須です |
| `label` | `string` | — | ラベル文字列。`<label class="form-label">` として描画されます |
| `rules` | `Rule[]` | — | バリデーションルールの配列。`oninput` / `onblur` / フォーム送信時に評価されます |
| `initialValue` | `any` | — | このフィールドの初期値。`Form` の `initialValues` で一括指定するほうを推奨します |
| `formRef` | `Form` | — | 親の `Form` インスタンスへの参照。フォーム連携には必須です |
| `class` | `string` | — | ラッパー要素に付与する追加 CSS クラス |

### Rule

| プロパティ | Type | Description |
| --- | --- | --- |
| `required` | `boolean` | 必須入力。値が空の場合にエラーを出します |
| `min` | `number` | 最小文字数（または最小値）。入力が `min` 未満のときエラーを出します |
| `max` | `number` | 最大文字数（または最大値）。入力が `max` を超えるときエラーを出します |
| `message` | `string` | エラー発生時に表示するカスタムメッセージ |
| `validator` | `(value: any) => void \| Promise<void>` | カスタムバリデータ関数。エラーにするときは例外をスローします |

## アクセシビリティ

- エラーメッセージは `<div class="invalid-feedback">` に `display: block` で表示されます
- `is-invalid` クラスが子コンポーネントに自動付与されます（Bootstrap の赤枠スタイルが適用されます）
- ラベルと入力要素の関連付けは `Input` 側の `id` を手動で指定することで行えます
