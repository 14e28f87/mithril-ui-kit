# Container

<script setup>
import { setup as basicDemo } from './demos/container/basic'
import basicCode from './demos/container/basic.tsx?raw'
</script>

## 概要

`Container` は本文やフォームの最大幅を制御するためのコンポーネントです。横に広い画面でも読みやすさを維持しつつ、必要に応じて `fluid` で全幅レイアウトにも切り替えられます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Container Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `maxWidth` | `string` | — | 非 fluid 時の最大幅です |
| `centerContent` | `boolean` | `false` | 子要素を中央寄せにします |
| `fluid` | `boolean` | `false` | 最大幅を解除して全幅に広げます |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |