# Mithril UI Kit とは?


Mithril UI Kit は Mithril.js で動作する UI コンポーネント ライブラリです。
MIT License で配布されているオープンソース ソフトウェアです。

自由につかって Mithril.js の開発を、より良く進めましょう！


過去の開発の経緯などから、 Mithril UI Kit では Bootstrap 5 が一部で使用されています。
そのため Bootstrap 5 に慣れている人からすると共存しやすいと思います。が、Bootstrap 以外のシステムと組み合わせると Style の崩れなどの問題を引き起こしやすいため注意が必要です。


# セットアップガイド

現在 まだ npm リポジトリにちゃんと登録しておらず 次のようにインストールしてください。

~~~
npm install git://
~~~




## 使用方法


~~~tsx
import m from "mithril";
import { Input } from "mithriluikit";

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





Include the main CSS file:

~~~
// Use with a bundler like webpack or parcel
import 'path/to/node_modules/construct-ui/lib/index.css'
~~~

