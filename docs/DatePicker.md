# DatePicker

<script setup>
import { setup as basicDemo } from './demos/date-picker/basic'
import { setup as rangeDemo } from './demos/date-picker/range'
import { setup as inlineDemo } from './demos/date-picker/inline'

import basicCode from './demos/date-picker/basic.tsx?raw'
import rangeCode from './demos/date-picker/range.tsx?raw'
import inlineCode from './demos/date-picker/inline.tsx?raw'
</script>

## 概要

`DatePicker` は Chakra UI 風の compound component で、単一選択・複数選択・範囲選択、ポップオーバー表示とインライン表示、`day` / `month` / `year` ビュー切り替えをサポートします。

::: tip
旧 API（`DatePickerClassic`）は `mithriluikit-dev` パッケージに移動しました。
:::

## Usage 使用例

### 基本

単一選択のもっとも基本的な構成です。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 範囲選択

`selectionMode="range"` と `numOfMonths={2}` を組み合わせた例です。

<MithrilDemo :setup="rangeDemo" :code="rangeCode" />

### インラインカレンダー

`inline` を指定すると、入力トリガーなしでカレンダー本体だけを表示できます。

<MithrilDemo :setup="inlineDemo" :code="inlineCode" />

## API Reference

### Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `selectionMode` | `"single" \| "multiple" \| "range"` | `"single"` | 選択モードを指定します |
| `value` | `Date[]` | — | 制御モード時の選択値です |
| `defaultValue` | `Date[]` | — | 非制御モード時の初期値です |
| `onValueChange` | `(details) => void` | — | 値変更時に呼ばれます |
| `defaultView` | `"day" \| "month" \| "year"` | `"day"` | 初期ビューを指定します |
| `minView` | `"day" \| "month" \| "year"` | — | これ以上ドリルダウンしない最小ビューです |
| `maxView` | `"day" \| "month" \| "year"` | — | これ以上ドリルアップしない最大ビューです |
| `view` | `"day" \| "month" \| "year"` | — | 制御モード時のビューです |
| `onViewChange` | `(details) => void` | — | ビュー変更時に呼ばれます |
| `inline` | `boolean` | `false` | カレンダー本体を常時表示します |
| `open` | `boolean` | — | 制御モード時の開閉状態です |
| `defaultOpen` | `boolean` | `false` | 非制御モード時の初期開閉状態です |
| `onOpenChange` | `(details) => void` | — | 開閉状態変更時に呼ばれます |
| `closeOnSelect` | `boolean` | `true` | 選択後に自動で閉じるかを指定します |
| `disabled` | `boolean` | `false` | 全体を無効化します |
| `readOnly` | `boolean` | `false` | 入力を読み取り専用にします |
| `min` | `Date` | — | 選択可能な最小日付です |
| `max` | `Date` | — | 選択可能な最大日付です |
| `isDateUnavailable` | `(date: Date) => boolean` | — | 個別日付の利用可否を判定します |
| `hideOutsideDays` | `boolean` | `false` | 月外の日付セルを隠します |
| `fixedWeeks` | `boolean` | `false` | 常に 6 週表示にします |
| `numOfMonths` | `number` | `1` | 同時表示する月数です |
| `startOfWeek` | `number` | `0` | 週の開始曜日です |
| `locale` | `string` | `"ja-JP"` | 表示ロケールです |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 入力やカレンダーのサイズを指定します |
| `format` | `(date: Date) => string` | — | 入力欄へ表示するフォーマッターです |
| `parse` | `(text: string) => Date \| undefined` | — | 入力文字列のパーサーです |
| `placeholder` | `string` | — | 入力のプレースホルダーです |
| `name` | `string` | — | フォーム送信用 name 属性です |
| `class` | `string` | — | ルート要素の追加クラスです |
| `style` | `Record<string, string>` | — | ルート要素のインラインスタイルです |

### Subcomponents

| Component | Description |
| --- | --- |
| `DatePicker.Root` | 状態管理を行うルートです |
| `DatePicker.Label` | ラベル表示です |
| `DatePicker.Control` | 入力欄とトリガー群のコンテナです |
| `DatePicker.Input` | 入力欄です。`range` 時は 1 つの `Input` から開始日と終了日の 2 入力を描画します |
| `DatePicker.IndicatorGroup` | トリガーとクリアボタンのラッパーです |
| `DatePicker.Trigger` | カレンダー開閉トリガーです |
| `DatePicker.ClearTrigger` | 値クリアボタンです |
| `DatePicker.Positioner` | ポップオーバー配置要素です |
| `DatePicker.Content` | カレンダー本体です |
| `DatePicker.View` | `day` / `month` / `year` のビュー切り替え単位です |
| `DatePicker.Header` | 前後移動とタイトル表示を行うヘッダーです |
| `DatePicker.DayTable` | 日ビューです |
| `DatePicker.MonthTable` | 月ビューです |
| `DatePicker.YearTable` | 年ビューです |
| `DatePicker.PresetTrigger` | プリセット値を即時適用するボタンです |
