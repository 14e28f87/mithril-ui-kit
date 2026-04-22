# Mithril UI Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Mithril UI Kit は、Mithril.js 向けに作られた UI コンポーネントライブラリです。
軽量で素早く動き、フォーム、レイアウト、フィードバック、ナビゲーションなどの基本コンポーネントをまとめて利用できます。

Chakra UI の考え方や使いやすさを参考にしながら、Mithril.js の流儀に合わせて設計しています。

## できること

- Mithril.js アプリにすぐ組み込める UI コンポーネントを提供します。
- Bootstrap Icons を同梱しているため、アイコン用の追加 CDN は不要です。
- docs とデモを通して、各コンポーネントの使い方を確認できます。

## 使用方法

### インストール

```bash
npm install git+https://github.com/14e28f87/mithril-ui-ki.git
```

### 使い方

```tsx
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
```

利用できるコンポーネントや詳細な props は、ドキュメントを参照してください。

## 開発者向けガイド

### リポジトリの取得

このプロジェクトは [Jujutsu (jj)](https://www.jj-vcs.dev/) と VSCode + Github Copilot AI Agent を積極的に使用して開発しています


```bash
jj git clone https://github.com/14e28f87/mithril-ui-kit.git
cd mithril-ui-kit
```

Git を使う場合は次のコマンドでも構いません。

```bash
git clone https://github.com/14e28f87/mithril-ui-kit.git
cd mithril-ui-kit
```


### 各種 開発コマンド

```bash
npm run build
npm run dev
npm run docs:dev
npm run docs:build
```

## ドキュメント

公式ドキュメントは次の URL にあります。

https://14e28f87.github.io/mithril-ui-kit/

## ライセンス

本プロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) を参照してください。
