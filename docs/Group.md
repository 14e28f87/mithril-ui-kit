# Group

<script setup>
import { setup as basicDemo } from './demos/group/basic'
import basicCode from './demos/group/basic.tsx?raw'
</script>

## 概要

`Group` は関連する操作要素をひとまとまりで並べるためのレイアウトコンポーネントです。`attached` を使うとボタン群を接着したように表示でき、ツールバーや segmented action の土台に向いています。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### Group Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `attached` | `boolean` | `false` | 子要素を隙間なく接着して表示します |
| `grow` | `boolean` | `false` | 子要素を均等幅で広げます |
| `gap` | `string \| number` | — | 非接着時の子要素間隔です |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |