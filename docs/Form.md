# Form

<script setup>
import { setup as basicDemo } from './demos/form/basic'
import basicCode from './demos/form/basic.tsx?raw'
</script>

## 概要

フォーム全体を管理するコンポーネント。FormItem の登録・アンレジスト管理、フィールド値の一元管理、バリデーション実行、onFinish / onFinishFailed コールバック。

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## Props

- `onFinish?: (values: Record<string, any>) => void | Promise<void>` - 検証成功時のコールバック
- `onFinishFailed?: (errors: {name: string; error: string}[]) => void | Promise<void>` - 検証失敗時のコールバック
- `layout?: "vertical" | "horizontal"` - レイアウト（"vertical" | "horizontal"）
- `class?: string` - 追加 CSS クラス
- `initialValues?: Record<string, any>` - フォーム全体の初期値（Form インスタンス作成時に一括設定）



## 使用方法（推奨：インスタンスベース）

Form コンポーネントを使用する際は、**必ず事前にインスタンスを作成し、再利用**してください。JSX で直接 `<Form>` と記述してはいけません。

```tsx
import { Form, FormItem, Input } from 'mithriluikit';

export default class MyComponent implements m.Component {
  // ✅ 正しい方法：コンポーネント外でインスタンスを作成
  public formRef = new Form();

  public view() {
    const ThisFormRef: any = this.formRef;

    return (
      <ThisFormRef
        onFinish={async (values) => {
          console.log("フォーム送信:", values);
        }}
        layout="vertical"
        initialValues={{
          username: "太郎",
          email: "taro@example.com"
        }}
      >
        <FormItem name="username" label="ユーザー名" formRef={this.formRef}>
          <Input placeholder="名前を入力" />
        </FormItem>
        <FormItem name="email" label="メールアドレス" formRef={this.formRef}>
          <Input type="email" placeholder="メールアドレスを入力" />
        </FormItem>
        <FormItem>
          <button type="submit" class="btn btn-primary">送信</button>
        </FormItem>
      </ThisFormRef>
    );
  }
}
```



## なぜインスタンスベースが必須なのか？

### ❌ JSX で直接記述した場合（ダメな例）

```tsx
export default class MyComponent implements m.Component {
  public view() {
    return (
      <Form  // ❌ 直接記述
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        <FormItem name="username" label="ユーザー名" formRef={new Form()}>
          <Input />
        </FormItem>
      </Form>
    );
  }
}
```

このように JSX で `<Form>` を直接記述すると、以下の問題が発生します：

#### 問題 1: インスタンスの再生成によるステート喪失
- **Mithril.js の仕組み**: JSX で `<Form>` と記述すると、render のたびに新しいインスタンスが生成される
- **結果**: Form の内部状態（`this.state.fields`）が初期化されるため、フォームに入力した値がリセットされてしまう
- **現象**: 
  - ユーザーがフィールドに値を入力しても、画面が再度 render されると値が消える
  - キー入力のたびに値が消えてしまう

#### 問題 2: formRef の参照不整合
- **原因**: FormItem が登録するするフィールドの formRef と、Form インスタンスが異なる
- **結果**: FormItem が Form に正しくフィールドを登録できず、バリデーションが機能しない
- **現象**:
  - FormItem の rules バリデーションが実行されない
  - フォーム送信時に onFinish が呼ばれない
  - エラーメッセージが表示されない

#### 問題 3: 複数行テーブルでのデータ破損
- **状況**: ExpandableTable や複数行を展開/非展開する場合
- **原因**: 展開するたびに新しい Form インスタンスが生成される
- **結果**: 前に入力したデータが失われ、フォームが初期状態にリセットされる
- **現象**:
  - テーブル行を展開してフォームに値を入力
  - テーブル行を非展開にしてから再度展開
  - 入力した値が全て消えている

### ✅ インスタンスベースが正しい理由

```tsx
export default class MyComponent implements m.Component {
  // ✅ クラスプロパティで Form インスタンスを一度だけ作成
  public formRef = new Form();

  public view() {
    const ThisFormRef: any = this.formRef;

    return (
      <ThisFormRef  // ✅ JSX では同じインスタンスを再利用
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* ... */}
      </ThisFormRef>
    );
  }
}
```

**メリット**:
1. **ステートの永続化**: Form インスタンスが再利用されるため、`state.fields` が保持される
2. **参照の一貫性**: FormItem と Form が同じインスタンスを参照するため、フィールド登録が完全に機能する
3. **バリデーション機能**: rules が正しく実行され、エラーメッセージが表示される
4. **複数行対応**: テーブルの各行に異なる Form インスタンスを割り当てることで、独立したフォーム状態を管理できる



## initialValues の使用方法

Form コンポーネントで初期値を設定する場合、FormItem の `initialValue` ではなく、Form の `initialValues` Props を使用してください：

```tsx
<ThisFormRef
  initialValues={{
    username: "太郎",
    email: "taro@example.com",
    age: 30
  }}
  onFinish={(values) => console.log(values)}
>
  <FormItem name="username" label="ユーザー名" formRef={this.formRef}>
    <Input />
  </FormItem>
  <FormItem name="email" label="メールアドレス" formRef={this.formRef}>
    <Input />
  </FormItem>
</ThisFormRef>
```

### 注意点
- FormItem の `initialValue` Props は非推奨です。代わりに Form の `initialValues` で一括設定してください
- `initialValues` はフォーム作成時の初期値であり、後から変更したい場合は Form インスタンスの `setState` メソッドを使用できます



## 複数行テーブルでの使用例

各行に独立したフォームを持たせたい場合、行ごとに異なる Form インスタンスを管理します：

```tsx
export default class TableDemo implements m.Component {
  data: Record[];
  formRefs: Map<string, Form> = new Map();

  view() {
    return (
      <ExpandableTable
        dataSource={this.data}
        expandable={{
          expandedRowRender: (record, index) => {
            // 行ごとに Form インスタンスを管理
            if (!this.formRefs.has(record.id)) {
              this.formRefs.set(record.id, new Form());
            }
            const formRef = this.formRefs.get(record.id)!;
            const ThisFormRef: any = formRef;

            return (
              <ThisFormRef
                initialValues={{
                  name: record.name,
                  email: record.email
                }}
                onFinish={(values) => {
                  this.data[index] = { ...this.data[index], ...values };
                  m.redraw();
                }}
              >
                <FormItem name="name" label="名前" formRef={formRef}>
                  <Input />
                </FormItem>
                {/* ... */}
              </ThisFormRef>
            );
          }
        }}
      />
    );
  }
}
```

**ポイント**:
- `Map<string, Form>` で行ごとの Form インスタンスを保持
- 展開時に既存のインスタンスを取得（存在しない場合のみ新規作成）
- 各行が独立したフォーム状態を保有