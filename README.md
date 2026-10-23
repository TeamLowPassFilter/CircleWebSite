# CircleWebSite

同人サークル「Low Pass Filter」のWebサイトです。Hugoで生成し、Netlifyで公開しています。

公開URL: https://lowpassfilter.netlify.app/

## ページの追加

- サークルの作品は `content/products/` に追加します。表紙画像は `static/images/` に置き、front matter の `thumbnail` に `images/ファイル名` を指定します。
- メンバーのページは `content/メンバー名/` に追加します。メンバーごとに本文や表示方法を選べます。
- 久井の小説は `content/hisai/作品名/` に章を追加します。章の `subtitle`、`prev`、`next` は既存ファイルに合わせて設定します。
- 公開するページは `draft = false`、未公開のページは `draft = true` にします。テストページ `content/takuya04/1.md` は下書きです。

`netlify.toml` にビルド設定があります。公開先URLが変わった場合は、Netlifyが提供する `URL` をビルド時に使用します。

## 検索と共有

- 各ページに固有のタイトル、説明、正規URLを出力します。小説の章はサブタイトルもタイトルに含めます。
- Hugoが `sitemap.xml` を生成し、`robots.txt` から案内します。下書きは公開ページとサイトマップに含まれません。
- NetlifyのDeploy PreviewにはNetlifyが `X-Robots-Tag: noindex` を付けます。正規URLは公開サイトを指します。
- 必要に応じてGoogle Search Consoleに公開URLの `sitemap.xml` を登録してください。

## セキュリティ

- `netlify.toml` のレスポンスヘッダーでCSP、HTTPS接続の維持、クリックジャッキング防止、MIME判定防止、リファラー制御、不要なブラウザー権限の停止を設定します。
- yamafuの記録表はGoogle Sheets APIを使用します。現在のAPIキーはブラウザー用JavaScriptとGit履歴に公開されています。Google Cloud側でキーをローテーションし、`static/js/yamafu.js` のキーも新しい値に更新してください。利用APIを **Google Sheets API** のみに、利用元を **https://lowpassfilter.netlify.app** とその配下に制限してください。Deploy Previewで記録表も確認する場合は、そのプレビューURLを一時的に許可してください。
- ブラウザーから使うAPIキーは新しい値にしても閲覧者に見えます。利用元とAPIの制限が必要です。
