---
name: typescript-code-comments
description: "ソースコードにコメントを書く。Use when: コメントを追加したい、JSDocを書きたい、ドキュメントコメントを入れたい、コードの説明を追加したい、使用例を書きたい"
---

# コードコメント追加スキル

このプロジェクトのコメントスタイルに沿って、TypeScript/TSX ファイルにコメントを追加する。

このスキルは TypeScript/TSX 専用であり、SCSS のコメント記述は対象外とする。

## コメントの基本方針

- **言語:** 日本語で書く
- **スタイル:** JSDoc 形式 (`/** ... */`) を使う
- **粒度:** クラス・関数・型・複雑なロジックにはコメントを書く
- **使用例:** クラスや公開関数には `@example` で使い方を示す

---

## スタイルガイド

### 1. 型・インターフェース

```tsx
/**
 * @typedef {Object} MyComponentOptions
 * @property {string} [title] - タイトル（省略可）
 * @property {boolean} [disabled=false] - 無効化するかどうか
 */
export type MyComponentAttrs = {
    title?: string;
    disabled?: boolean;
};
```

インターフェースのプロパティには `/** インラインコメント */` を使う:

```tsx
export interface MyWidget {
    /** GridStack レイアウト設定 (x, y, w, h, id, ...) */
    gridOpts: GridStackWidget;
    /** ウィジェット内部を描画する Mithril コンポーネント */
    component: m.ComponentTypes<any>;
}
```

---

### 2. クラス（`@class`）

```tsx
/**
 * @class MyComponent
 * @description
 * コンポーネントの概要を書く（1〜2行）
 *
 * 詳細な説明。どんな問題を解決するか、どう動くかを書く。
 * 複数行になる場合は段落を分ける。
 *
 * 主な機能:
 * - 機能1
 * - 機能2
 * - 機能3
 *
 * 使い方の流れ:
 * 1. ステップ1
 * 2. ステップ2
 * 3. ステップ3
 *
 * 注意:
 * - 注意事項1（あれば）
 *
 * @example
 * // 実際の使い方を JSX で書く
 * <MyComponent
 *     value={state.value}
 *     oninput={(v) => { state.value = v; m.redraw(); }}
 * />
 */
export class MyComponent implements m.Component<MyComponentAttrs> {
    ...
}
```

---

### 3. パブリックメソッド・スタティックメソッド（`@function`）

```tsx
/**
 * @function show
 * @static
 * @description
 * モーダルを表示し、結果を Promise で返します
 *
 * @param {MyOptions} opts - オプション
 * @returns {Promise<boolean>} - 処理結果
 *
 * 実装の詳細:
 * 1. ...何をするか...
 * 2. ...
 *
 * 注意:
 * - 呼び出し側で resolve() を呼ぶ必要がある
 *
 * @example
 * const result = await MyClass.show({ title: "確認" });
 * if (result) { ... }
 */
static show(opts: MyOptions): Promise<boolean> {
    ...
}
```

---

### 4. ライフサイクルメソッド

Mithril のライフサイクル (`oninit`, `oncreate`, `onbeforeupdate`, `onbeforeremove`) には簡潔なコメントを書く:

```tsx
oncreate(vnode: m.VnodeDOM<MyAttrs>) {
    // DOM が作成された直後にフォーカスを当てる
    (vnode.dom as HTMLElement).focus();
}

onbeforeupdate(vnode: m.Vnode<MyAttrs>, old: m.VnodeDOM<MyAttrs>) {
    // 外部から value が変わったとき、内部状態を同期する
    if (vnode.attrs.value !== old.attrs.value) {
        this.internalValue = vnode.attrs.value ?? "";
    }
}

onbeforeremove(vnode: any) {
    // フェードアウトアニメーションが終わるまで DOM 除去を待つ
    return new Promise<void>((done) => {
        vnode.dom.addEventListener("animationend", done, { once: true });
    });
}
```

---

### 5. インラインコメント（`//`）

複雑なロジックや、なぜそうしているか分からない箇所に書く:

```tsx
// GridStack が最初にロードされるときはアニメーションがついて気持ち悪いので無効にする
// ロード完了後に有効にして、Drag&Drop のアニメーションを活かす
this.grid = GridStack.init({ animate: false, ...opts }, el);

// ※ 描画サイクルを待つために setTimeout を使うのが確実
setTimeout(() => {
    this.grid?.setAnimation(true);
}, 0);
```

「何をしているか」ではなく **「なぜそうしているか」** を書くのがポイント。

---

## 手順

1. **対象を特定する**: コメントが不足しているクラス・関数・型を確認する
2. **スタイルを選ぶ**: 上のガイドから対象（クラス/関数/型/インライン）に合ったスタイルを選ぶ
3. **日本語で書く**: 説明は日本語。`@param`, `@returns` タグは英語、説明は日本語
4. **使用例を書く**: `@example` でリアルなコード例を書く（コピペして動くレベルが理想）
5. **インラインコメントを添える**: 複雑な処理や「なぜそうしているか」分からない箇所に `//` コメントを追加する

---

## 参考ファイル（このプロジェクトの実例）

- `.github/skills/typescript-code-comments/samples/Modal.sample.tsx`
