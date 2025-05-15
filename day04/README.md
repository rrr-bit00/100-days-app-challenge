# Day04 - 入力バリデーションフォーム（localStorage対応）

![Day04 Screenshot](image.png)

## 🖥 デモ

🔗 [Live Demo（GitHub Pages）](https://rrr-bit00.github.io/100-days-app-challenge/day04/)

---

## 📌 概要

1日1アプリ開発チャレンジ Day04 の作品です。
氏名・メールアドレス・パスワードを登録できるフォームを作成しました。
バリデーション（入力チェック）を行い、入力された情報は履歴テーブルに追加されます。履歴は localStorage に保存され、ページを再読み込みしても保持されます。

---

## 🚀 機能一覧

- 姓・名・メール・パスワード・確認用パスワードの入力フォーム
- 各入力欄にバリデーション（未入力・形式・一致チェック）
- エラー時には該当箇所にメッセージを表示
- 登録内容をテーブル表示
- 履歴を localStorage に保存（永続化）
- 削除ボタンで1件ずつ履歴を削除（localStorage も更新）

---

## 🛠 使用技術

- HTML（フォーム構造とテーブル）
- CSS（レイアウトとスタイル）
- JavaScript（バリデーション・DOM操作・localStorage処理）
- Web Storage API（localStorage）

---

## 📂 ファイル構成

```
day04/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## ✅ 今後の改善案

- 削除時に確認ダイアログを出す
- パスワードを伏せ字（`●●●●`）で表示するオプション
- 編集機能の追加（履歴の更新）
- localStorage の容量管理
- バリデーション処理の共通化・リアルタイム化

---

## 💡 学び・工夫した点

- `input.value.trim()` を使って入力の空白を除去
- `textContent` を使って安全にエラー表示を行う実装
- localStorage を配列で管理し、JSON化して保存・復元
- 削除時には配列を filter で再構成し保存内容を同期
- テーブルに削除ボタンを付け、1行単位で DOM 操作
- `idNum` を使って一意のIDを割り当て、履歴管理を簡単にした点
