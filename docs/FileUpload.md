# FileUpload

<script setup>
import { setup as basicDemo } from './demos/file-upload/basic'
import basicCode from './demos/file-upload/basic.tsx?raw'
</script>

## 概要

`FileUpload` はクリック選択とドラッグアンドドロップの両方を扱える compound component です。選択済みファイル一覧も同じコンポーネント内で描画でき、添付 UI を 1 つのパターンにまとめられます。

## Usage 使用例

### 基本

<MithrilDemo :setup="basicDemo" :code="basicCode" />

## API Reference

### FileUpload.Root Props

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `false` | 複数ファイル選択を許可します |
| `accept` | `string` | — | `input[type=file]` の `accept` 属性です |
| `maxFileSize` | `number` | — | 許可する最大ファイルサイズです |
| `maxFiles` | `number` | — | 許可する最大ファイル数です |
| `files` | `File[]` | — | 制御モード時のファイル配列です |
| `onFilesChange` | `(files: File[]) => void` | — | ファイル配列変更時に呼ばれます |
| `disabled` | `boolean` | `false` | 無効化します |
| `class` | `string` | — | 追加クラスです |

### Subcomponents

| Component | Description |
| --- | --- |
| `FileUpload.Label` | ラベル表示です |
| `FileUpload.Dropzone` | ドラッグアンドドロップ領域です |
| `FileUpload.DropzoneContent` | ドロップ領域内の説明です |
| `FileUpload.Trigger` | ファイル選択ボタンです |
| `FileUpload.ItemGroup` | 選択済ファイル一覧の描画位置です |
| `FileUpload.ItemName` | ファイル名表示 slot です |
| `FileUpload.ItemSizeText` | ファイルサイズ表示 slot です |
| `FileUpload.ItemDeleteTrigger` | 削除ボタン slot です |