# InlineEdit

<script setup>
import { setup as basicDemo } from './demos/inline-edit/basic'
import basicCode from './demos/inline-edit/basic.tsx?raw'
</script>

## 概要

表示テキストをその場で編集できるインライン編集コンポーネントです。既定ではダブルクリックで編集モードに入り、Enter で確定、Escape でキャンセルできます。

`value` / `oninput` 形式を採用しているため、`FormItem` との連携にも利用できます。

## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

`oninput` が例外を投げるか rejected Promise を返した場合、編集状態は閉じず、そのまま再編集できます。`FormItem` と組み合わせた場合は、バリデーション失敗時に該当フィールドを開いたままにできます。

## Props

- `value?: string | null` - 表示中の値（外部制御）
- `oninput?: (v: string | null) => void | Promise<void>` - 確定時に呼ばれるコールバック
- `onblur?: () => void` - フォーカス喪失時のコールバック
- `placeholder?: string` - 値が空のときに表示する文言
- `class?: string` - 追加 CSS クラス
- `disabled?: boolean` - 編集を無効化
- `editTrigger?: "doubleclick" | "click"` - 編集開始トリガー（既定: `"doubleclick"`）
- `editing?: boolean` - 編集状態の外部制御値
- `onEditingChange?: (editing: boolean) => void` - 編集状態変更通知
- `saveOnBlur?: boolean` - blur 時に保存するか（既定: `true`）
- `type?: string` - 編集 input の type 属性（既定: `"text"`）
- `maxLength?: number` - 編集 input の最大文字数
- `id?: string` - 編集 input の ID
- `onEditStart?: () => void` - 編集開始時コールバック
- `onEditCancel?: (value: string | null) => void` - 編集キャンセル時コールバック
- `onEditEnd?: (value: string | null) => void` - 編集確定時コールバック
- `controlRef?: InlineEditControlRef` - 外部ボタンから編集開始・保存・キャンセルを呼ぶための参照

## 使用例

### 基本（ダブルクリックで編集）

```tsx
<InlineEdit
  value={state.title}
  placeholder="ダブルクリックして編集"
  oninput={(v) => {
    state.title = v ?? "";
  }}
/>
```

### クリックで編集開始

```tsx
<InlineEdit
  value={state.owner}
  editTrigger="click"
  saveOnBlur={false}
  oninput={(v) => {
    state.owner = v ?? "";
  }}
/>
```

### FormItem 連携

```tsx
const formRef = new Form();
const ThisFormRef: any = formRef;

<ThisFormRef onFinish={(values) => console.log(values)}>
  <FormItem name="displayName" label="表示名" formRef={formRef}>
    <InlineEdit placeholder="ダブルクリックして編集" />
  </FormItem>

  <FormItem
    name="temperature"
    label="温度入力"
    rules={[
      { required: true, message: "温度は必須です" },
      {
        validator: (v) => {
          const text = v == null ? "" : String(v).trim();
          if (!/^\d{1,4}$/.test(text)) {
            throw "温度は 1〜4 桁の数値で入力してください";
          }
        },
      },
    ]}
    formRef={formRef}
  >
    <InlineEdit placeholder="例: 820" />
  </FormItem>

  <button type="submit" class="btn btn-primary">保存</button>
</ThisFormRef>
```

### 外部ボタンで編集トグル

```tsx
<InlineEdit
  value={note}
  editing={isEditing}
  onEditingChange={(next) => {
    isEditing = next;
  }}
  oninput={(v) => {
    note = v ?? "";
  }}
/>
<button
  type="button"
  class="btn btn-outline-secondary"
  onclick={() => {
    isEditing = !isEditing;
  }}
>
  <i class="bi bi-pencil"></i> 編集
</button>
```

### 外部ボタンで Edit / Save / Cancel

```tsx
const controls: InlineEditControlRef = {};

<div class="d-flex gap-2 align-items-center">
  <div class="flex-grow-1">
    <InlineEdit
      value={note}
      editing={isEditing}
      onEditingChange={(next) => {
        isEditing = next;
      }}
      controlRef={controls}
      saveOnBlur={false}
      oninput={(v) => {
        note = v ?? "";
      }}
    />
  </div>

  {isEditing ? (
    <>
      <button
        type="button"
        class="btn btn-outline-secondary"
        title="Save"
        onmousedown={(event) => {
          event.preventDefault();
        }}
        onclick={() => {
          void controls.saveEdit?.();
        }}
      >
        <i class="bi bi-check"></i>
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        title="Cancel"
        onmousedown={(event) => {
          event.preventDefault();
        }}
        onclick={() => {
          controls.cancelEdit?.();
        }}
      >
        <i class="bi bi-x"></i>
      </button>
    </>
  ) : (
    <button
      type="button"
      class="btn btn-outline-secondary"
      title="編集を切り替え"
      onclick={() => {
        controls.startEdit?.();
      }}
    >
      <i class="bi bi-pencil"></i>
    </button>
  )}
</div>
```

`saveOnBlur={false}` と Save / Cancel ボタンを組み合わせる場合は、ボタンクリック時の `mousedown` で `preventDefault()` を入れて input の blur を抑止してください。これにより Save / Cancel の意図した動作を優先できます。
