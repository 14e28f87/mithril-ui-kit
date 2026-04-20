# Skeleton

<script setup>
import { setup as basicDemo } from './demos/skeleton/basic'
import basicCode from './demos/skeleton/basic.tsx?raw'
</script>

## 概要

`Skeleton` は読み込み中のコンテンツ領域をプレースホルダーで表現するコンポーネントです。`SkeletonCircle` と `SkeletonText` を組み合わせると、プロフィール行やカードの読み込み状態を簡単に再現できます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Skeleton Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"pulse" \| "shine" \| "none"` | `"pulse"` | アニメーション種別です |
| `loading` | `boolean` | `true` | `false` の場合は children をそのまま表示します |
| `height` | `string` | — | プレースホルダーの高さです |
| `width` | `string` | — | プレースホルダーの幅です |
| `borderRadius` | `string` | — | 角丸指定です |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Skeleton` | 単一の矩形プレースホルダーです |
| `SkeletonCircle` | 円形プレースホルダーです |
| `SkeletonText` | 複数行テキスト向けプレースホルダーです |