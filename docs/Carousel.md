# Carousel

<script setup>
import { setup as basicDemo } from './demos/carousel/basic'
import { setup as multipleDemo } from './demos/carousel/multiple'
import { setup as controlledDemo } from './demos/carousel/controlled'

import basicCode from './demos/carousel/basic.tsx?raw'
import multipleCode from './demos/carousel/multiple.tsx?raw'
import controlledCode from './demos/carousel/controlled.tsx?raw'
</script>

## 概要

`Carousel` は `Carousel.Root`, `Carousel.ItemGroup`, `Carousel.Item`, `Carousel.Control`, `Carousel.IndicatorGroup` で構成する compound component 型カルーセルです。ページ単位の前後移動、インジケーター、自動再生、縦横レイアウトの切り替えに対応しており、ダッシュボードのカード切り替えやチュートリアル表示に向いています。

## Usage 使用例

### 基本

前後ボタンとインジケーターを備えた、もっとも一般的なカルーセル構成です。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 1ページに複数枚表示

`slidesPerPage` を使うと、カードギャラリーのように 1 ビューへ複数スライドを並べられます。

<MithrilDemo :setup="multipleDemo" :code="multipleCode" />

### 制御モード

`page` と `onPageChange` を使うと、外部ボタンや別 UI と同期したページ制御ができます。

<MithrilDemo :setup="controlledDemo" :code="controlledCode" />

## API Reference

### Carousel.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `slideCount` | `number` | — | スライド総数です |
| `page` | `number` | — | 制御モード時の現在ページです。0 始まりです |
| `defaultPage` | `number` | `0` | 非制御モード時の初期ページです |
| `onPageChange` | `(details: { page: number }) => void` | — | ページ変更時に呼ばれます |
| `slidesPerPage` | `number` | `1` | 1 画面に表示するスライド数です |
| `slidesPerMove` | `number` | `1` | 公開 API 上の移動幅指定です。現行実装ではページ単位移動として扱われます |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | スライド方向です |
| `loop` | `boolean` | `false` | 末尾から先頭、先頭から末尾へループします |
| `autoplay` | `number \| false` | `false` | ミリ秒指定で自動再生します |
| `allowMouseDrag` | `boolean` | `false` | 将来拡張用の公開 props です。現行実装ではドラッグ移動は未対応です |
| `class` | `string` | — | 追加クラスです |
| `style` | `Record<string, string>` | — | ルートのインラインスタイルです |

### Carousel.Item Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `number` | — | スライドのインデックスです |
| `class` | `string` | — | スライド要素の追加クラスです |
| `style` | `Record<string, string>` | — | スライド要素のインラインスタイルです |

### Carousel.Indicator Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `number` | — | 対応するページ番号です |
| `class` | `string` | — | インジケーターの追加クラスです |
| `style` | `Record<string, string>` | — | インジケーターのインラインスタイルです |

### 補助コンポーネント Props

| Component | Props |
| --- | --- |
| `Carousel.ItemGroup` | `class?: string`, `style?: Record<string, string>` |
| `Carousel.Control` | `class?: string`, `style?: Record<string, string>` |
| `Carousel.PrevTrigger` | `class?: string`, `style?: Record<string, string>` |
| `Carousel.NextTrigger` | `class?: string`, `style?: Record<string, string>` |
| `Carousel.IndicatorGroup` | `class?: string`, `style?: Record<string, string>` |

### Subcomponents

| Component | Description |
| --- | --- |
| `Carousel.Root` | ページ状態と自動再生を管理するルートです |
| `Carousel.Control` | 前後移動ボタンのラッパーです |
| `Carousel.PrevTrigger` | 前ページへ戻るボタンです |
| `Carousel.NextTrigger` | 次ページへ進むボタンです |
| `Carousel.ItemGroup` | スライド列全体のコンテナです |
| `Carousel.Item` | 個々のスライドです |
| `Carousel.IndicatorGroup` | インジケーター列です |
| `Carousel.Indicator` | 特定ページへ移動するボタンです |
