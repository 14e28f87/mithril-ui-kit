---
name: mithriluikit-docs-demo
description: "mithril-ui-kit の VitePress ドキュメントにライブデモを追加・拡張する。Use when: docs に動くデモを追加したい、コード表示を単一ソース化したい、MithrilDemo を使ってドキュメントを整備したい"
---

# mithril-ui-kit docs ライブデモ作成スキル

`docs/` に、保守しやすいライブデモを追加するための手順。

このスキルでは、`Accordion` コンポーネントを docs 品質の基準ページとして扱う。URL 参照ではなく、ローカル見本として `.github/skills/mithriluikit-docs-demo/samples/Accordion.sample.md` を必ず参照する。

## いつ使うか

- コンポーネント docs に「その場で動くデモ」を追加したい
- 実行コードと表示コードの二重管理を避けたい
- 既存の `MithrilDemo` ラッパーに合わせて統一したい

## 先に確認する前提

- docs 開発サーバー: `npm run docs:dev`
- ライブラリ参照先: docs 側で `mithril-ui-kit` alias が `src/index.ts` を向いていること
- デモ表示コンポーネント: `docs/.vitepress/theme/MithrilDemo.vue`
- 公開 export の正本: `src/components/index.ts`

## 最初にやること

1. `src/components/index.ts` を見て、公開 export 名を確認する
2. 対象コンポーネントの実装ファイルを見て、現行 API と subcomponent 名を確認する
3. `.github/skills/mithriluikit-docs-demo/samples/Accordion.sample.md` を開き、見出し構成と demo の粒度を合わせる
4. 既存 docs がある場合は、古い API に引っ張られていないかを確認する

`dist` や古い docs の記述を正本にしてはいけない。必ず source export と実装を起点に合わせる。

## ドキュメント本文の書き方ルール

- 説明文・注釈・補足は日本語で書く
- まず「何のためのコンポーネントか」を 2〜4 文で説明し、その後に使用例を置く
- API Reference は source 実装にある現行 API をそのまま反映する
- compound component では `Root` / `Item` / `Trigger` などの役割差がすぐ分かるように書く
- demo の前には「この例で何が分かるか」を 1 行添える
- current API と classic API が共存する場合は混在させず、導線だけを相互に置く
- build が通っても live demo が壊れていることがあるため、見た目と console の確認まで行って完了とする

## 標準パターン（必須）

### 1. デモ正本を `docs/demos` に作る

配置規則:

- `docs/demos/<component-kebab-case>/basic.tsx`
- 複数例がある場合は `multiple.tsx`, `disabled.tsx` など追加

実装規則:

- **`docs/demos` 内のサンプルコードは JSX (TSX) 記述を基本にする**
- `/** @jsx m */` を先頭に付ける
- TypeScript が `react-jsx` を推論しそうな場合は `/** @jsxRuntime classic */` も付ける
- `setup(el: HTMLElement): void` を export
- `m.mount(el, ...)` で Mithril コンポーネントを描画
- import は `from "mithril-ui-kit"` を使う（相対 import で `src` を直接参照しない）
- `m("div", ...)` の多重ネストは避け、`<Component />` / `<div>` の JSX を優先する
- サンプル state は local 変数 + `m.redraw()` で最小限に保つ
- `docs/demos` の `.tsx` を「実行コード」と「表示コード」の単一正本にする

テンプレート:

```tsx
/** @jsx m */
import m from "mithril";
import { Input } from "mithril-ui-kit";

export function setup(el: HTMLElement): void {
  m.mount(el, {
    view() {
      return <Input placeholder="デモ" />;
    }
  });
}
```

### 2. markdown から同じファイルを実行と表示に使う

`docs/<Component>.md` の先頭に `script setup` を置く。

```md
<script setup>
import { setup as basicDemo } from './demos/input/basic'
import basicCode from './demos/input/basic.tsx?raw'
</script>
```

本文では以下を使う。

```md
## デモ

<MithrilDemo :setup="basicDemo" :code="basicCode" />
```

これで「実行コード」と「表示コード」を同一ファイルに統一できる。

### 3. Accordion 構成でページを組む

基本見出し構成は次の順に固定する。

1. `# ComponentName`
2. `## 概要`
3. `## Usage 使用例`
4. `## API Reference`
5. 必要に応じて `## アクセシビリティ` または補足節

`Accordion` のように、単なる「Props 列挙」ではなく「どう使い分けるか」が分かる demo を複数置く。

demo の粒度指針:

- 最低 1 つは `basic.tsx`
- 状態制御を持つなら `controlled.tsx`
- モード差分があるなら `multiple.tsx`, `orientation.tsx`, `variant.tsx`, `range.tsx` などを追加
- 1 ページ 2〜4 demo を基本とし、Accordion の密度を目標にする

本文の書き方:

- `## 概要` では 2〜4 文で役割と主な subcomponents を説明する
- `## Usage 使用例` では各 demo の前に 1 行で要点を書く
- `## API Reference` では Root Props を最優先で表にする
- compound component は `Subcomponents` 表を必ず入れる
- 必要なら `Item Props`, `Group Props`, `Child Props` などを追加する

### 4. current API と classic API を分離する

公開 API に current / classic の両方がある場合、1 ページに混在させない。

- current 版は `<Name>.md`
- legacy 版は `<Name>Classic.md`
- current ページ側に `::: tip` で classic への導線を置く
- classic ページ側にも current への導線を置く

例:

- `Toast` は `createToaster()` + `Toast.Toaster` を説明する
- `ToastClassic` は `ToastClassic.show()` を説明する
- `TagsInput` は compound component を説明する
- `TagsInputClassic` は旧単体 API を説明する

### 5. docs 導線も同時に更新する

page を追加・改修したら、内容だけで終わらせない。

- `docs/.vitepress/config.mts` の nav / themeConfig を必要に応じて更新する
- `docs/index.md` の一覧を更新する
- classic/current の両方があるなら、sidebar 上でも両方見つかるようにする

### 6. export と docs の同期を確認する

- `src/components/index.ts` に公開されているのに docs が無い component を見落とさない
- demo で使う subcomponent 名が実装と一致しているか確認する
- 旧 docs の API 名を流用しない
- `DatePicker.MonthGrid` のような stale 名称が残っていないか grep で確認する

## Playwright MCP による検証（必須）

docs や demo を更新したら、`docs:build` の成功だけで終わらせない。必ず live な VitePress 画面で確認する。

基本手順:

1. `npm run docs:dev` で docs を起動する
2. 対象 route をブラウザで開き、demo preview が視覚的に表示されることを確認する
3. console error と pageerror を確認する
4. 変更が複数ページにまたがる場合は、sidebar の docs route を巡回して preview 崩れがないかを確認する
5. もし docs の記述と実装がずれていたら、古い markdown ではなく source 実装を正とする

確認ポイント:

- `.mithril-demo__preview` が空ではない
- Shadow DOM 内にコンテンツが mount されている
- クリックや開閉など、demo の主操作が 1 回は通る
- `The selector must be either a string or a component.` のような pageerror が出ていない
- `favicon.ico` の 404 のような無害なノイズと、実害のある runtime error を区別する

## コンポーネント別の注意点

### Form / FormItem

- `Form` はインスタンスベースで使う（`new Form()` を再利用）
- JSX で直接 `<Form>` を使わず、`const ThisFormRef: any = formRef` 経由で描画
- `FormItem` には `formRef` を必ず渡す

### Modal / Offcanvas / Toast

- `Modal` / `Offcanvas` の classic API は Promise ベースデモでよい
- `Toast` は current API と classic API を区別する
- current `Toast` は `createToaster()` + `Toast.Toaster` を使う
- `ToastClassic` のみ `ToastClassic.show(...)` を使う

### Overlay

- `new Overlay(component, options)` で生成し `show()` / `hide()` を明示
- 表示状態を docs 上で見えるように文字列で示すと分かりやすい

### EditableTable / ExpandableTable / ExpandableEditingTable

- `rowKey` を安定したキーにする
- 追加・編集・削除の最小シナリオを 1 つ入れる
- デモ state 変更後に必要なら `m.redraw()` を呼ぶ

### MithrilGridStack

- widget は vnode ではなく `component` を渡す
- 動的追加/全削除を最小ボタンで示す
- docs:build 時の SSR 影響は別論点なので docs:dev で体験確認を優先

### DatePicker / TagsInput / compound component 全般

- 実装の subcomponent 名を source から確認する
- `Root Props` だけでなく `Subcomponents` 表を入れる
- 範囲選択、編集可能、inline などモード差分は demo を分ける
- 旧 API が残っている場合は classic ページへ分離する

## 追加時チェックリスト

1. [ ] `docs/demos/<component>/` に正本 `.tsx` を作成した
2. [ ] md 側で `setup` と `?raw` の両方を import した
3. [ ] `<MithrilDemo :setup="..." :code="..." />` を追加した
4. [ ] Accordion のように `概要` → `Usage 使用例` → `API Reference` の順になっている
5. [ ] Root Props と Subcomponents を表で整理した
6. [ ] current/classic が混在していない
7. [ ] `src/components/index.ts` の export と食い違っていない
8. [ ] `config.ts` sidebar と `docs/index.md` を更新した
9. [ ] 実行コードと表示コードの重複がない
10. [ ] docs:dev で対象 page を開いて preview を確認した
11. [ ] Playwright MCP で console error / pageerror の有無を確認した
12. [ ] 変更が広い場合は sidebar route 巡回で回帰確認した
13. [ ] 既存見出しや説明を壊していない

## 変更後の確認コマンド

```bash
npm run docs:dev
npm run docs:build
```

> 既存の `docs:dev` サーバーを起動しっぱなしで route が 404 のまま残ることがある。新しい demo / page を追加・改修した後に表示が崩れる場合は、いったん `docs:dev` を再起動して確認する。

必要に応じて対象ページを開いて確認:

- `/Accordion`, `/Form`, `/Modal`, `/Toast`, `/EditableTable`, `/MithrilGridStack`

docs 品質に迷ったら、まず `Accordion.sample.md` に寄せる。省略ではなく、Accordion が持っている「複数 demo」「使い分けの短文」「API Reference 表」を再現する。
