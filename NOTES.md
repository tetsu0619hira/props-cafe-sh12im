# PROPS. cafe 提案用デモ / 2026-09-26

## 参考サイトと反映点（公式サイトを実際に閲覧）
- 七ヶ月 https://www.nanakagetu.net/ ：冒頭はロゴ・縦ナビ・雰囲気写真。写真→営業・利用案内→営業予定→来店時のお願い→店舗情報の約5群。主導線はInstagram。白・暗いオリーブ、控えめな小さい書体と中央余白。営業変更・人数条件が重要。営業日導線を採用し、小さな固定幅や長い注意事項は避け、スマホ優先に変更。
- 栞日 https://sioribi.jp/ ：冒頭は大きな手書き文字とナビ・カレンダー。お知らせ→イベント3群→事業紹介→アクセスの約6群。カレンダー・Instagramが目立ち、アクセス内に地図。白黒、太いサンセリフと広い余白。営業時間・駐車場・徒歩経路を集約する考えを採用し、イベント欄は設けず営業・地図を近接配置。
- 凡凡舎 https://www.bonbonsha.jp/ ：冒頭はロゴ・ナビ・大きな写真。ランチ→メニュー→紹介→問い合わせ→地図・店舗情報の約5群。地図・Instagramへの導線。白、青のロゴ、英字セリフ見出しと大きな余白。メニュー・営業時間・所在地の明示を採用し、折り畳みメニューは常時読める3区分に変更。
- 選定補足：七ヶ月・凡凡舎は地域メディアの紹介と好意的な体験記事、栞日は松本の観光・工芸関連紹介を確認。点数順位での比較は行っていない。文章・写真・ロゴ・固有レイアウトは転用せず、来店判断に必要な情報構成だけ参考にした。

## 画像
Pexelsの各素材ページは Free to use の表示を確認。全画像は実店舗・実商品を表すものではなく、各写真にキャプションを重ねた。
- 7038283 / Anastasiya Vragova https://www.pexels.com/photo/a-person-holding-clear-glass-cup-of-coffee-7038283/ ：手元とカップ。ヒーロー。192,510 bytes（容量調整のためJPEG再圧縮）。
- 7658176 / Cup of Couple https://www.pexels.com/photo/coffee-beans-on-wooden-spoon-near-table-napkin-7658176/ ：コーヒー豆と器。153,443 bytes。
- 6531771 / cottonbro studio https://www.pexels.com/photo/hands-holding-the-handle-of-the-cups-with-hot-drink-on-the-table-6531771/ ：テーブルとカップを持つ手元。87,486 bytes。
- ダウンロード形式：https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&w=1200

## 要確認事項
1. PROPS. cafe&factory 表記で良いか。
2. 電話番号。tel:要素は番号未入力で無効。確認まではInstagramを連絡導線にする。
3. 定休日・不定休の有無。現状は依頼記載の月・金休、その他10:00〜17:30。
4. 駐車場の場所・台数。
5. Wi-Fiの有無。
6. 各メニューの価格（3区分それぞれ）。
7. 現在の提供メニュー・通年提供の有無。
8. テイクアウト可否。
9. リノベの経緯を載せて良いか。経緯本文は確認前のため未掲載。

## 実装・公開前提
- HTML/CSS/JavaScriptのみ。noindex、viewport-fit=cover、下部safe-area対応。Google Fontsはオンライン読込。
- 電話は未確認番号への誤発信を防止。Instagramへ案内。電話番号確認後にtel:・aria-disabled・tabindex・CSS・クリック防止処理を更新する。
- フォームは送信先未設定のデモ。入力チェックのみ実行し、送信・保存は行わない。実運用時はFormspree接続と個人情報の取扱い確認が必要。
- 地図ボタンはユーザー指定のMaps URLs形式をそのまま保持。iframeは店名・住所検索による埋め込み。
- AGENTS.mdの一般方針はCloudflare Pagesだが、今回のユーザー指定GitHub Pagesを優先。
- 住所・営業時間は依頼どおり。評価数値、食材の産地、開業の経緯などは掲載していない。

## 確認結果
- 390×844のブラウザ幅で横はみ出しなし、固定バー表示・3枚の画像読込・フォーム入力チェックと未送信の状態表示を確認。
- Googleマップは指定リンクでPROPS. cafeの住所が一致することを確認。共有画面で取得した公式iframeコードに変更。確認用ブラウザではiframe内が空白のため、埋め込みの実描画確認は未完了。地図を直接開く代替リンクを併記。
- GitHub Pages公開URLの表示とデプロイ成功を確認。
