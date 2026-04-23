# Mithril UI Kit とは?

Mithril UI Kit は Mithril.js 向けの UI コンポーネントライブラリです。
このリポジトリは standalone 版の正本で、正式なパッケージ名は `mithril-ui-kit` です。

Bootstrap 5 と相性のよい API を持ちつつ、Mithril らしい軽量な実装を目指しています。

# セットアップガイド

GitHub リポジトリから直接導入できます。

~~~bash
npm install git+https://github.com/14e28f87/mithril-ui-ki.git
~~~

現時点で npm registry へは登録されていません

## 使用方法

~~~tsx
import m from "mithril";
import { Input } from "mithril-ui-kit";

let value: string | null = "mithril-user";

const Component = {
  view() {
    return (
      <div>
        <Input
          value={value}
          placeholder="ユーザー名を入力"
          oninput={(v: string | null) => {
            value = v;
            m.redraw();
          }}
        />

        <div class="mt-2 text-muted small">
          現在値: {value ?? "(null)"}
        </div>
      </div>
    );
  }
};

m.mount(el, Component);
~~~

## スタイルのカスタマイズ

CSS / SCSS ベースで見た目を調整したい場合は、[スタイリングとテーマ設定](./styling.md) を参照してください。

- `--bs-*` と `--muk-*` の優先順位
- Bootstrap 併用時の theme 上書き方法
- Bootstrap なしでの `--muk-*` 定義方法
- `Modal` / `Offcanvas` などのコンポーネント固有変数

## 補足

- import 名は常に `mithril-ui-kit` を使用します
- docs のデモも同じ import 名で統一します
- Bootstrap 5 を併用しない場合でも破綻しない設計を基本にしています

