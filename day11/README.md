# 🌍 国検索アプリ

## 概要

REST Countries API を使用して、国名を検索すると以下の情報を表示するシンプルなWebアプリです。

- 国名
- 国旗（画像表示）
- 地域
- 通貨（記号と名前）
- タイムゾーン
- Google Mapリンク

JavaScript のクラス構造を使い、データの取得・表示処理を整理しています。

---

## 使用技術

- HTML / CSS / JavaScript (ES6)
- REST Countries API

---

## 機能一覧

- ✅ 国名を入力して検索すると、その国の情報を表示
- ✅ 国旗画像を強調表示（枠付き・背景色付き）
- ✅ 国名や地域、通貨、タイムゾーンはラベル＋データでわかりやすく表示
- ✅ タイムゾーンは複数ある場合もカンマ区切りで表示
- ✅ GoogleMapへのリンクを表示（新しいタブで開く）
- ✅ 入力バリデーションあり（国名未入力時のエラーメッセージ表示）
- ✅ APIエラー時は「国が見つかりませんでした」とエラー表示
- ✅ エラーは通知風に上部表示し、一定時間後に自動で消える（スマートなUI実装）

---

## 使い方

1. 国名を入力（例: `Japan`、`United States` など）
2. 「検索」ボタンをクリック
3. 国の情報が表示されます

---

## ディレクトリ構成（例）

```text
.
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## 今後の改善ポイント（メモ）

- エラー通知のアニメーションやデザイン改善
- 検索履歴の表示機能
- 検索候補のサジェスト機能追加
- 国データをカード形式でより視覚的にレイアウト

---

## 使用APIについて

このアプリでは、以下の外部APIを利用しています。

- REST Countries API (https://restcountries.com/) - 国データの取得に利用
  - Licensed under the MIT License (https://github.com/apilayer/restcountries/blob/master/LICENSE)
