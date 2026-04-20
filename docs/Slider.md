# Slider

<script setup>
import { setup as basicDemo } from './demos/slider/basic'
import basicCode from './demos/slider/basic.tsx?raw'
</script>

## 概要

Chakra UI 風の Slider compound component。シングルサム、レンジ（マルチサム）、マーカー表示に対応。ドラッグとキーボード操作をサポート。

## Usage 使用例

<MithrilDemo :setup="basicDemo" :code="basicCode" />

### 基本

```tsx
<Slider.Root min={0} max={100} defaultValue={[50]}>
  <Slider.Label>音量</Slider.Label>
  <Slider.ValueText />
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>
```

## コンポーネント構成

| パーツ | 説明 |
|--------|------|
| `Slider.Root` | ルートコンポーネント。状態管理を提供 |
| `Slider.Label` | ラベル |
| `Slider.ValueText` | 現在の値を表示 |
| `Slider.Control` | ドラッグ領域 |
| `Slider.Track` | トラック（レール） |
| `Slider.Range` | 塗りつぶし範囲 |
| `Slider.Thumb` | つまみ |
| `Slider.DraggingIndicator` | ドラッグ中のみ表示 |
| `Slider.HiddenInput` | フォーム送信用の隠し input |
| `Slider.MarkerGroup` | マーカーグループ |
| `Slider.Marker` | 個別のマーカー |

## API Reference

### Slider.Root

| Prop | 型 | デフォルト | 説明 |
|------|----|-----------|------|
| `min` | `number` | `0` | 最小値 |
| `max` | `number` | `100` | 最大値 |
| `step` | `number` | `1` | ステップ |
| `value` | `number[]` | — | 現在の値（制御モード） |
| `defaultValue` | `number[]` | `[0]` | 初期値（非制御モード） |
| `onValueChange` | `(details: { value: number[] }) => void` | — | 値変更コールバック（ドラッグ中も発火） |
| `onValueChangeEnd` | `(details: { value: number[] }) => void` | — | 値変更完了コールバック |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 方向 |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | サイズ |
| `variant` | `"outline" \| "solid"` | `"outline"` | 外観バリアント |
| `disabled` | `boolean` | `false` | 無効化 |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `origin` | `"start" \| "center"` | `"start"` | 範囲の起点 |
| `minStepsBetweenThumbs` | `number` | `0` | マルチサム時の最小ステップ間隔 |

### Slider.Thumb

| Prop | 型 | 説明 |
|------|----|------|
| `index` | `number` | サムのインデックス |

### Slider.Marker

| Prop | 型 | 説明 |
|------|----|------|
| `value` | `number` | マーカーの値 |

## レンジスライダー

```tsx
<Slider.Root min={0} max={100} defaultValue={[25, 75]} minStepsBetweenThumbs={1}>
  <Slider.Label>範囲</Slider.Label>
  <Slider.ValueText />
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
    <Slider.Thumb index={1} />
  </Slider.Control>
</Slider.Root>
```

## マーカー付き

```tsx
<Slider.Root min={0} max={100} step={25} defaultValue={[50]}>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
  <Slider.MarkerGroup>
    <Slider.Marker value={0}>0%</Slider.Marker>
    <Slider.Marker value={50}>50%</Slider.Marker>
    <Slider.Marker value={100}>100%</Slider.Marker>
  </Slider.MarkerGroup>
</Slider.Root>
```

## キーボード操作

| キー | 動作 |
|------|------|
| `←` / `↓` | 値を1ステップ減少 |
| `→` / `↑` | 値を1ステップ増加 |
| `PageDown` | 値を大きく減少（範囲の10%） |
| `PageUp` | 値を大きく増加（範囲の10%） |
| `Home` | 最小値に設定 |
| `End` | 最大値に設定 |
