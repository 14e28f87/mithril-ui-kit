# RadioGroup

<script setup>
import { setup as basicDemo } from './demos/radio-group/basic'
import { setup as childrenDemo } from './demos/radio-group/children'
import basicCode from './demos/radio-group/basic.tsx?raw'
import childrenCode from './demos/radio-group/children.tsx?raw'
</script>

## 概要

`RadioGroup` は、単一選択のラジオ入力をまとめて管理するコンポーネントです。
`options` 配列での一括レンダリングと、子要素を並べる構成の両方をサポートします。
`orientation` による配置切替、グループ単位の `disabled` 制御、文字列と数値をまたいだ柔軟な値比較に対応しています。

## Usage 使用例

### options 配列で選択肢を構成

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 子要素を使ってシンプルに構成

`options` を使わず、子要素から選択肢を構成する例です。

<MithrilDemo :setup="childrenDemo" :code="childrenCode" />

## API Reference

### RadioGroup Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `any` | — | 現在の選択値です（制御モード） |
| `oninput` | `(e: Event \| any) => void` | — | 選択値が変わったときに呼ばれます |
| `options` | `{ label: m.Children; value: any; disabled?: boolean; error?: boolean }[]` | — | 選択肢配列です。指定時は内部で radio input を一括描画します |
| `name` | `string` | 自動生成 | 各 input の `name` 属性です |
| `disabled` | `boolean` | `false` | グループ全体を無効化します |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | レイアウト方向を指定します |
| `class` | `string` | — | 追加 CSS クラスです |

### options 要素型

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `m.Children` | yes | 表示ラベルです |
| `value` | `any` | yes | 選択値です |
| `disabled` | `boolean` | no | 個別に無効化します |
| `error` | `boolean` | no | エラー表示（`is-invalid`）を有効にします |

## 補足

- 値比較は厳密一致に加えて、文字列と数値の相互比較（例: `1` と `"1"`）にも対応します。
- `options` 未指定時は子要素から選択肢を生成します。プレーンテキスト子要素の場合、内部値は 0 始まりのインデックスです。
- ルート要素には `role="radiogroup"` が付与されます。
