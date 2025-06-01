# 🌏カード域別国情報カードアプリ

## 📌概要
REST Countries APIを利用して、地域ごとに国情報をカード形式で一括確認できるwebアプリです。<br>
「アジア」「ヨーロッパ」「アメリカ」「アフリカ」「オセアニア」の5つの地域ボタンから選択することができ、クリックすると（国名・首都・日本語名称・標準時間・国旗）が表示されます。<br>
また、APIのアクセスを減らすためLocalStorageで地域ごとのデータをキャッシュしています。

## 🚀使用技術
- HTML / CSS / JS
- REST Countries API
- LocalStorage

## 🌿機能一覧
☑️地域ボタンのクリックで指定した地域の国情報カードを一覧表示<br>
☑️国情報カードには以下の並びで情報を表示

- 国名
- 首都
- 日本語名称（ある場合）
- 標準時間（複数ある場合、改行表示）
- 国旗（画像）

☑️国ごとにカードを分け、見やすいレイアウトを意識<br>
☑️2回目以降の表示は、localStorageからデータを呼び出しAPI負荷を軽減<br>

## ディレクトリ構成
```
├──index.html
├──style.css
├──main.js
└──EADME.md
```

## ✍️学んだこと
- REST Countries APIの地域後ことに取得するエンドポイントの理解
- APIデータを効率的に処理するためのforEach処理
- データを一つにまとめて表示するためのHTML構造の作り方

## 📝今後の課題
- エラー時のユーザーへの通知表示
- サジェスト機能の追加
- デザインの改善（色の最適化やレスポンシブ対応）

## 🌐使用APIについて
このアプリでは以下の外部APIを使用しています。
- REST Countries API(https://restcountries.com/) - 国データの取得に利用
    - Licensed under the MIT License (https://github.com/apilayer/restcountries/blob/master/LICENSE)

