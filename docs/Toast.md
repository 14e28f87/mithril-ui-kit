# Toast

<script setup>
import { setup as basicDemo } from './demos/toast/basic'
import basicCode from './demos/toast/basic.tsx?raw'
</script>

## 概要

`Toast` は `createToaster()` で管理オブジェクトを作成し、`Toast.Toaster` で描画する命令的トースト通知システムです。現在の API は `Toast.show()` ではなく、`toaster.success()` や `toaster.create()` を使います。

::: tip
旧 Promise ベース API（`ToastClassic`）はレガシー扱いです。このページでは current API を案内します。
:::

## Usage 使用例

### 基本

`createToaster()` でトースターを作成し、`Toast.Toaster` を 1 つ配置して使います。

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### createToaster Options

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `"top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end"` | `"bottom-end"` | 表示位置です |
| `duration` | `number` | `5000` | 自動消去までのミリ秒です。`0` で無期限表示します |
| `max` | `number` | `24` | 同時表示の最大件数です |
| `removeDelay` | `number` | `200` | 閉じアニメーション後に DOM から除去するまでの猶予です |
| `pauseOnHover` | `boolean` | `true` | ホバー中にタイマーを一時停止します |

### Toaster Methods

| Method | Description |
| --- | --- |
| `create(options)` | 任意タイプのトーストを作成します |
| `success(options)` | 成功トーストを作成します |
| `error(options)` | エラートーストを作成します |
| `warning(options)` | 警告トーストを作成します |
| `info(options)` | 情報トーストを作成します |
| `loading(options)` | ローディングトーストを作成します |
| `dismiss(id)` | 指定 ID のトーストを閉じます |
| `dismissAll()` | すべてのトーストを閉じます |
| `update(id, options)` | 既存トーストの内容を更新します |

### Toast Subcomponents

| Component | Description |
| --- | --- |
| `Toast.Root` | 単一トーストのルートです |
| `Toast.Indicator` | タイプアイコンです |
| `Toast.Title` | タイトル表示です |
| `Toast.Description` | 本文表示です |
| `Toast.ActionTrigger` | アクションボタンです |
| `Toast.CloseTrigger` | 閉じるボタンです |
| `Toast.Toaster` | createToaster の状態を描画する固定位置コンテナです |