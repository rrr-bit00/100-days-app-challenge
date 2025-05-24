# 📚 Book API (Day10)

## 概要

FastAPIで作成したシンプルな書籍管理APIです。
CRUD機能（Create, Read, Update, Delete）を備え、以下の操作が可能です。

---

## エンドポイント一覧

| メソッド | エンドポイント | 説明 | リクエストBody（例） |
|------| ------------- | ------------------- | ----- |
| GET | /book/{book_id} | 特定の本の情報を取得 | なし |
| POST | /book | 新たに本を登録 | `{ "id": 1, "title": "Python入門", "author": "田中太郎", "is_borrowed": false }` |
| PATCH | /book/{book_id} | 貸し出し状況を更新 | `{ "is_borrowed": true }` または `{ "is_borrowed": false }` |
| DELETE | /book/{book_id} | 登録した本を削除 | なし |

---

## 使い方（curl例）

### 新しい本を追加（POST）
```bash
curl -X POST "http://127.0.0.1:8000/book" -H "Content-Type: application/json" -d '{"id":1, "title":"Python入門", "author":"田中太郎", "is_borrowed":false}'
```

### 本の情報を取得（GET）
```bash
curl -X GET "http://127.0.0.1:8000/book/1"
```

### 貸し出し状況の更新（PATCH）
```bash
curl -X PATCH "http://127.0.0.1:8000/book/1" -H "Content-Type: application/json" -d '{"is_borrowed":true}'
```

### 本を削除（DELETE）
```bash
curl -X DELETE "http://127.0.0.1:8000/book/1"
```

## 学んだこと

- FastAPIでのCRUD API構築
- HTTPメソッドの役割（GET/POST/PATCH/DELETE）
- Content-Typeの役割と使い方
- curlでのAPI操作
- データの受け渡し方法（パスパラメータ / Body / クエリパラメータ）
