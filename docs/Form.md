# Form

<script setup>
import { setup as basicDemo } from './demos/form/basic'
import { setup as validationDemo } from './demos/form/validation'

import basicCode from './demos/form/basic.tsx?raw'
import validationCode from './demos/form/validation.tsx?raw'
</script>

## 概要

`Form` はフォーム全体の状態を一元管理するコンポーネントです。

フィールドの登録・解除、入力値の保持、バリデーション実行、送信処理（`onFinish` / `onFinishFailed`）を担当します。`FormItem` と組み合わせることで、宣言的にバリデーション付きフォームを構築できます。

::: tip インスタンスベースの使い方
`Form` クラスをインスタンスとして生成し、`formRef` として保持するのが基本パターンです。JSX 中で直接 `<Form>` と記述すると render ごとに新しいインスタンスが生成されて状態が失われるため、**必ずコンポーネントのプロパティとして事前に生成**してください。
:::

## Usage 使用例

### 基本

`new Form()` でインスタンスを作成し、`formRef` として `FormItem` に渡します。`onFinish` にフォーム値が渡されます。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### バリデーション付き

`FormItem` の `rules` で必須・文字数・カスタムバリデーションを設定できます。送信時にすべてのルールを評価し、エラーがあれば `is-invalid` スタイルとエラーメッセージを表示します。

<MithrilDemo :setup="validationDemo" :code="validationCode" />

## API Reference

### FormAttrs（Props）

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onFinish` | `(values: Record<string, any>) => void \| Promise<void>` | — | 検証成功時に呼ばれるコールバック。収集されたフィールド値のオブジェクトを受け取ります |
| `onFinishFailed` | `(errors: { name: string; error: string }[]) => void \| Promise<void>` | — | 検証失敗時に呼ばれるコールバック。エラー情報の配列を受け取ります |
| `layout` | `"vertical" \| "horizontal"` | `"vertical"` | フォームのレイアウト方向 |
| `initialValues` | `Record<string, any>` | — | フォーム全体の初期値。キーはフィールド名（`FormItem` の `name`）に対応します |
| `class` | `string` | — | ルート `<form>` 要素に付与する追加 CSS クラス |

### Form メソッド（公開 API）

| メソッド | シグネチャ | Description |
| --- | --- | --- |
| `registerField` | `(name: string, initialValue?: any) => void` | フィールドを登録します。`initialValues` から自動的に呼ばれます |
| `unregisterField` | `(name: string) => void` | フィールドの登録を解除します。`FormItem` のアンマウント時に自動で呼ばれます |
| `setFieldValue` | `(name: string, value: any) => void` | フィールド値をプログラムから更新します |
| `getFieldValue` | `(name: string) => any` | フィールドの現在値を取得します |
| `setFieldError` | `(name: string, error: string \| null) => void` | フィールドのエラーメッセージを設定します |
| `validateField` | `(name: string, rules: Rule[]) => Promise<void>` | 指定フィールドのバリデーションを実行します |
| `validate` | `() => Promise<Record<string, any>>` | 全フィールドのバリデーションを実行し、値を返します |

### FormState

`formRef.state.fields` は `Map<string, FieldState>` で、各フィールドの `value` と `error` を保持します。

```ts
type FieldState = {
  value: any;
  error: string | null;
};
```

## アクセシビリティ

- `<form>` 要素にレンダリングされるため、ネイティブの `submit` イベントが機能します
- `type="submit"` ボタンを置くだけで送信できます
- `data-layout` 属性でレイアウト方向を管理します
