# Day 02 - あたり付き自販機アプリ

## 概要

ボタンで飲み物を選ぶと、ランダムで「あたり」か「はずれ」が表示される自販機風アプリです。
入力欄から飲み物を追加でき、あたりまでの履歴表示・演出（当たり時の紙吹雪）などの機能も備えています。

---

## 使用技術

- HTML / CSS / JavaScript
- DOM操作（要素の取得・生成・追加・イベント登録）
- イベントリスナーの動的割り当て
- 状態管理（あたりは１回限り）
- `textarea` + `.value` によるユーザー入力の取得
- `ul` / `li` による履歴表示の追加
- day01に続き**外部ライブラリ**：[`canvas-confetti`](https://www.kirilv.com/canvas-confetti/)を用いた当たり演出

---

## 機能

- ボタンを押すと飲み物名と「あたり / はずれ」の結果を表示
- 一度だけ「あたり」が出る（再度外れ固定）
- 飲み物を自由に追加可能（`textarea`入力→ボタン化）
- 抽選結果が履歴として下部に自動で追加
- 「あたり」時には confetti（紙吹雪）の演出あり
- `textarea` は画面サイズに応じて自動調整され、スクロールバーなし

---

## ディレクトリ構成

```
day02/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## 学び・振り返り

- `createElement()` や `appendChild()` による要素の動的追加を習得
- `textarea.value` の使い方や `.dataset` 属性の扱いを理解
- `undefined` エラーの原因となるスペルミス・変数確認を通じて、**JavaScriptのデバック力UP**
- 抽選結果を履歴表示することで、**配列とDOMの連動**を学習
- `canvas-confetti` の導入により、外部ライブラリ活用とUX改善の復習ができた

---
