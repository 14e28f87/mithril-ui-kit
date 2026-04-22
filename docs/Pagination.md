# Pagination

<script setup>
import { setup as basicDemo } from './demos/pagination/basic'
import { setup as siblingDemo } from './demos/pagination/sibling'
import { setup as variantDemo } from './demos/pagination/variant'
import { setup as pagetextDemo } from './demos/pagination/pagetext'

import basicCode from './demos/pagination/basic.tsx?raw'
import siblingCode from './demos/pagination/sibling.tsx?raw'
import variantCode from './demos/pagination/variant.tsx?raw'
import pagetextCode from './demos/pagination/pagetext.tsx?raw'
</script>

## 概要

`Pagination` は省略記号付きのページ番号リストを自動生成するページネーションのコンポーネントです。

サブコンポーネント: `Root` / `PrevTrigger` / `NextTrigger` / `Items` / `PageText`

## Usage

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### siblingCount で省略幅を変更

<MithrilDemo :setup="siblingDemo" :code="siblingCode" />

### variant / size バリエーション

<MithrilDemo :setup="variantDemo" :code="variantCode" />

### PageText フォーマット

<MithrilDemo :setup="pagetextDemo" :code="pagetextCode" />


## API Reference

### Root Props

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `count` | `number` | — | 総アイテム数（必須） |
| `pageSize` | `number` | `10` | 1ページあたりの表示数 |
| `page` | `number` | — | 制御モード: 現在のページ（1始まり） |
| `defaultPage` | `number` | `1` | 非制御モード: 初期ページ |
| `onPageChange` | `(details: { page: number }) => void` | — | ページ変更コールバック |
| `siblingCount` | `number` | `1` | 省略表示する前後のページ数 |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | サイズ |
| `variant` | `"solid" \| "outline" \| "subtle"` | `"outline"` | バリエーション |

### PrevTrigger / NextTrigger Props

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `class` | `string` | — | 追加 CSS クラス |
| `style` | `Record<string, string>` | — | インラインスタイル |

### Items Props

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `class` | `string` | — | 追加 CSS クラス |
| `style` | `Record<string, string>` | — | インラインスタイル |

### PageText Props

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `format` | `"short" \| "compact" \| "long"` | `"short"` | 表示フォーマット |
| `class` | `string` | — | 追加 CSS クラス |
| `style` | `Record<string, string>` | — | インラインスタイル |

## アクセシビリティ

- ルート要素は `<nav aria-label="pagination">` としてレンダリングされる
- 現在のページは `aria-current="page"` でマークされる
- 先頭/末尾ページでは前/次ボタンが `disabled` になる
