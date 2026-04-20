# AspectRatio

<script setup>
import { setup as basicDemo } from './demos/aspect-ratio/basic'
import basicCode from './demos/aspect-ratio/basic.tsx?raw'
</script>

## 概要

`AspectRatio` は子要素の表示領域に一定の縦横比を維持させるコンポーネントです。サムネイル、動画、チャート領域のプレースホルダーを安定した比率で描画したいときに使います。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### AspectRatio Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `ratio` | `number` | `4 / 3` | 維持するアスペクト比です。`16 / 9` のように数値で渡します |
| `as` | `string` | `"div"` | 描画要素を切り替えます |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string> \| string` | — | インラインスタイルです |