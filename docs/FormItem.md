# FormItem

<script setup>
import { setup as basicDemo } from './demos/form-item/basic'
import basicCode from './demos/form-item/basic.tsx?raw'
</script>

## 概要

Form と子コンポーネント（Input など）を仲介するコンポーネント。フィールドの登録・アンレジスト、子コンポーネントへの value / oninput / onblur 注入、is-invalid クラスの自動付与、エラーメッセージ表示。

![FormItem 概念図](./formitem-overview.drawio.svg)

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## Props

- `name?: string` - フィールド名（フォーム連携に必須）
- `label?: string` - ラベル文字列
- `rules?: Rule[]` - バリデーションルール配列
- `initialValue?: any` - **非推奨**。代わりに Form の `initialValues` を使用してください
- `formRef?: any` - Form コンポーネント参照（必須）
- `class?: string` - 追加 CSS クラス

## Rule

- `required?: boolean` - 必須入力フラグ
- `min?: number` - 最小長（文字数 or 値）
- `max?: number` - 最大長
- `message?: string` - エラーメッセージ
- `validator?: (value: any) => void | Promise<void>` - カスタムバリデータ

## 使用例（推奨）

```tsx
export default class MyForm implements m.Component {
  public formRef = new Form();

  public view() {
    const ThisFormRef: any = this.formRef;

    return (
      <ThisFormRef
        layout="vertical"
        initialValues={{
          username: "太郎",
          email: "taro@example.com"
        }}
        onFinish={(values) => console.log("送信:", values)}
      >
        <FormItem
          name="username"
          label="ユーザー名"
          rules={[
            { required: true, message: "ユーザー名は必須です" },
            { min: 3, message: "3文字以上で入力してください" }
          ]}
          formRef={this.formRef}
        >
          <Input placeholder="入力..." />
        </FormItem>
        <FormItem
          name="email"
          label="メールアドレス"
          rules={[
            { required: true, message: "メールアドレスは必須です" }
          ]}
          formRef={this.formRef}
        >
          <Input type="email" placeholder="example@domain.com" />
        </FormItem>
        <FormItem>
          <button type="submit" class="btn btn-primary">送信</button>
        </FormItem>
      </ThisFormRef>
    );
  }
}
```

## initialValue Props について

FormItem の `initialValue` Props は推奨されません。以下の理由があります：

### ❌ initialValue を使った場合（非推奨）

```tsx
// ❌ 非推奨
<FormItem
  name="username"
  label="ユーザー名"
  initialValue="太郎"  // ← この書き方は避けてください
  formRef={this.formRef}
>
  <Input />
</FormItem>
```

**問題**:
1. フィールドを個別に初期化することで、フォーム全体の初期値管理が分散される
2. Form 側で `initialValues` と `initialValue` が混在すると、上書きや競合が起こる可能性がある
3. 複雑なフォーム（多数のフィールド、複数フォーム）では管理が煩雑になる

### ✅ Form の initialValues を使った場合（推奨）

```tsx
// ✅ 推奨：Form で一括管理
<ThisFormRef
  initialValues={{
    username: "太郎",
    email: "taro@example.com",
    age: 30,
    role: "user"
  }}
  onFinish={handleSubmit}
>
  <FormItem name="username" label="ユーザー名" formRef={this.formRef}>
    <Input />
  </FormItem>
  <FormItem name="email" label="メールアドレス" formRef={this.formRef}>
    <Input />
  </FormItem>
  {/* ... */}
</ThisFormRef>
```

**メリット**:
1. フォーム全体の初期値が一箇所に集約され、管理が容易
2. Form と FormItem の役割が明確に分離される（Form は状態管理、FormItem はバリデーション・UI）
3. 複数フォーム、複数行テーブルなど複雑なシナリオで安全に動作
4. 初期値の変更や更新が簡単

## formRef Props について

FormItem コンポーネントを使用する場合、**必ず `formRef` Props を指定してください**。これによって FormItem が Form インスタンスにフィールドを登録できます：

```tsx
<FormItem
  name="username"
  label="ユーザー名"
  formRef={this.formRef}  // ← 必須
>
  <Input />
</FormItem>
```

`formRef` がないと：
- フィールドが Form に登録されない
- バリデーションが実行されない
- onFinish が呼ばれない

## Rules（バリデーション）の指定方法

```tsx
<FormItem
  name="password"
  label="パスワード"
  rules={[
    {
      required: true,
      message: "パスワードは必須です"
    },
    {
      min: 8,
      message: "パスワードは8文字以上で入力してください"
    },
    {
      validator: (value: any) => {
        if (value && !/[A-Z]/.test(value)) {
          throw "大文字を1文字以上含める必要があります";
        }
      }
    }
  ]}
  formRef={this.formRef}
>
  <Input type="password" />
</FormItem>
```

バリデーションは以下の場合に実行されます：
- Input フィールドが blur（フォーカス喪失）された時
- Enter キーが押された時
- フォーム送信時（submit ボタンクリック）