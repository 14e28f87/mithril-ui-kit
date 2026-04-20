# Splitter

<script setup>
import { setup as basicDemo } from './demos/splitter/basic'
import basicCode from './demos/splitter/basic.tsx?raw'
</script>

## 概要

`Splitter` は複数パネル間の境界をドラッグしてサイズ変更できる compound component です。ナビゲーションと詳細パネル、エディタとプレビューなどを同一画面で並べたいときに使います。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Splitter.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `panels` | `SplitterPanelData[]` | — | 外部からパネル設定を与えるためのメタデータです |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 分割方向です |
| `onResize` | `(sizes: number[]) => void` | — | リサイズ時に呼ばれます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |

### Splitter.Panel Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultSize` | `number` | — | 初期サイズ比率です |
| `minSize` | `number` | — | 最小サイズ比率です |
| `maxSize` | `number` | — | 最大サイズ比率です |
| `collapsible` | `boolean` | `false` | 折りたたみ可能にします |
| `class` | `string` | — | 追加クラスです |

### Splitter.ResizeTrigger Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | ドラッグを無効化します |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `Splitter.Panel` | 個別のパネル領域です |
| `Splitter.ResizeTrigger` | パネル間のドラッグハンドルです |