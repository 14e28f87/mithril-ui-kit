# Dropdown

<script setup>
import { setup as basicDemo } from './demos/dropdown/basic'
import basicCode from './demos/dropdown/basic.tsx?raw'
import { setup as contextMenuDemo } from './demos/dropdown/context-menu'
import contextMenuCode from './demos/dropdown/context-menu.tsx?raw'
import { setup as submenuDemo } from './demos/dropdown/submenu'
import submenuCode from './demos/dropdown/submenu.tsx?raw'
import { setup as mixedDemo } from './demos/dropdown/mixed'
import mixedCode from './demos/dropdown/mixed.tsx?raw'
</script>

## 概要

ドロップダウンメニューコンポーネント。  
`Item`、`CheckboxItem`、`RadioItemGroup` / `RadioItem` を組み合わせて、柔軟なメニュー構成が可能。


## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## Context Menu（右クリックメニュー）

`Dropdown.ContextTrigger` でラップした領域を右クリックすると、カーソル位置にメニューが表示されます。  
ブラウザのデフォルトコンテキストメニューは抑制されます。

<MithrilDemo :setup="contextMenuDemo" :code="contextMenuCode" />

## Submenu（サブメニュー）

`positioning="right"` を指定した内側の `Dropdown.Root` をメニューアイテムとして配置することで、サブメニューを実現できます。

<MithrilDemo :setup="submenuDemo" :code="submenuCode" />

## Mixed Layout（複合レイアウト）

`ItemGroup`、`CheckboxItem`、`RadioItemGroup`、`Separator` を組み合わせた複合レイアウトのデモです。

<MithrilDemo :setup="mixedDemo" :code="mixedCode" />

## サブコンポーネント

| パーツ | 説明 |
|--------|------|
| `Dropdown.Root` | ルート。開閉状態・サイズ・positioning を管理 |
| `Dropdown.Trigger` | 開閉トリガー（ボタン） |
| `Dropdown.Positioner` | フローティング配置コンテナ |
| `Dropdown.Content` | メニュー本体 |
| `Dropdown.Arrow` | ポップオーバー矢印 |
| `Dropdown.Item` | 通常アイテム |
| `Dropdown.ItemGroup` | アイテムグループ（ラベル付き） |
| `Dropdown.Separator` | 区切り線 |
| `Dropdown.CheckboxItem` | チェックボックス付きアイテム |
| `Dropdown.RadioItemGroup` | ラジオグループ |
| `Dropdown.RadioItem` | ラジオアイテム |

## Dropdown.Root Props

| Prop | 型 | デフォルト | 説明 |
|------|----|-----------|------|
| `open` | `boolean` | — | 制御開閉 |
| `defaultOpen` | `boolean` | `false` | デフォルト開閉 |
| `onOpenChange` | `(details) => void` | — | 開閉コールバック |
| `onSelect` | `(details) => void` | — | アイテム選択コールバック |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | サイズ |
| `positioning` | `"start" \| "end"` | `"start"` | 配置方向 |
| `class` | `string` | — | 追加クラス |

## Dropdown.Item Props

| Prop | 型 | 説明 |
|------|----|------|
| `value` | `string` | アイテム値（`onSelect` で受け取る） |
| `disabled` | `boolean` | 無効化 |
| `destructive` | `boolean` | 危険操作スタイル |
| `closeOnSelect` | `boolean` | 選択後に閉じるか |

## Dropdown.CheckboxItem Props

| Prop | 型 | 説明 |
|------|----|------|
| `value` | `string` | アイテム値 |
| `checked` | `boolean` | チェック状態 |
| `onCheckedChange` | `(checked: boolean) => void` | 変更コールバック |
| `disabled` | `boolean` | 無効化 |

## Dropdown.RadioItemGroup / RadioItem Props

**RadioItemGroup:**

| Prop | 型 | 説明 |
|------|----|------|
| `value` | `string` | 現在の選択値 |
| `onValueChange` | `(value: string) => void` | 変更コールバック |

**RadioItem:**

| Prop | 型 | 説明 |
|------|----|------|
| `value` | `string` | アイテム値 |
| `disabled` | `boolean` | 無効化 |

## 使用例

### 基本

```tsx
import { Dropdown } from "mithril-ui-kit";

<Dropdown.Root onSelect={(d) => console.log(d.value)}>
  <Dropdown.Trigger>Actions ▾</Dropdown.Trigger>
  <Dropdown.Positioner>
    <Dropdown.Content>
      <Dropdown.Item value="edit">Edit</Dropdown.Item>
      <Dropdown.Item value="duplicate">Duplicate</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item value="delete" destructive>Delete</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Positioner>
</Dropdown.Root>
```

### ItemGroup

```tsx
<Dropdown.Root>
  <Dropdown.Trigger>Menu ▾</Dropdown.Trigger>
  <Dropdown.Positioner>
    <Dropdown.Content>
      <Dropdown.ItemGroup label="File">
        <Dropdown.Item value="new">New</Dropdown.Item>
        <Dropdown.Item value="open">Open</Dropdown.Item>
      </Dropdown.ItemGroup>
      <Dropdown.Separator />
      <Dropdown.ItemGroup label="Edit">
        <Dropdown.Item value="undo">Undo</Dropdown.Item>
        <Dropdown.Item value="redo">Redo</Dropdown.Item>
      </Dropdown.ItemGroup>
    </Dropdown.Content>
  </Dropdown.Positioner>
</Dropdown.Root>
```

### CheckboxItem

```tsx
<Dropdown.Root>
  <Dropdown.Trigger>Format ▾</Dropdown.Trigger>
  <Dropdown.Positioner>
    <Dropdown.Content>
      <Dropdown.CheckboxItem value="bold" checked={boldChecked}
        onCheckedChange={(c) => { boldChecked = c; }}>
        Bold
      </Dropdown.CheckboxItem>
    </Dropdown.Content>
  </Dropdown.Positioner>
</Dropdown.Root>
```

### RadioItem

```tsx
<Dropdown.Root>
  <Dropdown.Trigger>Font Size ▾</Dropdown.Trigger>
  <Dropdown.Positioner>
    <Dropdown.Content>
      <Dropdown.RadioItemGroup value={fontSize}
        onValueChange={(v) => { fontSize = v; }}>
        <Dropdown.RadioItem value="small">Small</Dropdown.RadioItem>
        <Dropdown.RadioItem value="medium">Medium</Dropdown.RadioItem>
        <Dropdown.RadioItem value="large">Large</Dropdown.RadioItem>
      </Dropdown.RadioItemGroup>
    </Dropdown.Content>
  </Dropdown.Positioner>
</Dropdown.Root>
```