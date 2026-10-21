# CircleWebSite

同人サークル「Low Pass Filter」のWebサイトです。Hugoで生成し、Netlifyで公開しています。

公開URL: https://lowpassfilter.netlify.app/

## ページの追加

- サークルの作品は `content/products/` に追加します。表紙画像は `static/images/` に置き、front matter の `thumbnail` に `images/ファイル名` を指定します。
- メンバーのページは `content/メンバー名/` に追加します。メンバーごとに本文や表示方法を選べます。
- 久井の小説は `content/hisai/作品名/` に章を追加します。章の `subtitle`、`prev`、`next` は既存ファイルに合わせて設定します。
- 公開するページは `draft = false`、未公開のページは `draft = true` にします。テストページ `content/takuya04/1.md` は下書きです。

`netlify.toml` にビルド設定があります。公開先URLが変わった場合は、Netlifyが提供する `URL` をビルド時に使用します。
