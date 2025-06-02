# 🎬 映画情報管理API

## 📌 概要
FastAPI + SQLAlchemy + SQLite を使用して構築した RESTful API です。
映画の基本情報（タイトル・説明・監督・公開年）を保存・取得・更新・削除ができるCRUD機能を提供します。
FastAPIの自動ドキュメント生成機能も活用しており、`/docs` から即座にAPI操作が可能です。

## 🚀 使用技術
- Python 3.12
- FastAPI
- SQLAlchemy
- SQLite3
- Pydantic

## 📂 ディレクトリ構成
```
├─main.py
├─models.py      -SQLAlchemy モデル定義
├─schemas.py     -スキーマ定義
├─crud.py        -DB操作（CRUD）
├─database.py    -DB接続・初期化処理
└─README.md
```

## 🍁 提供エンドポイント
| メソッド | パス             | 機能                  |
|----------|------------------|-----------------------|
| POST     | `/movies`        | 映画情報の新規登録   |
| GET      | `/movies`        | 映画の一覧取得       |
| GET      | `/movies/{id}`   | 映画の詳細取得       |
| PUT      | `/movies/{id}`   | 映画情報の更新       |
| DELETE   | `/movies/{id}`   | 映画情報の削除       |

## 🔧映画データ構造（例）
```json
{
  "title": "インセプション",
  "description": "夢の中で戦う",
  "director": "クリストファー・ノーラン",
  "released_year": 2010
}
```


## 💻 動作確認URL
- Swagger UI（APIドキュメント）: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- ReDoc（詳細ドキュメント）: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## curl例（使用方法）

### 映画の新規登録（POST）
```bash
curl -X POST "http://127.0.0.1:8000/movies" -H "Content-Type: application/json" -d '{"title":"インセプション", "description":"夢の中で戦う", "director":"クリストファー・ノーラン", "released_year":2010}'
```
```bash
curl -X GET "http://127.0.0.1:8000/movies"
```
```bash
curl -X GET "http://127.0.0.1:8000/movies/1"
```
```bash
curl -X PUT "http://127.0.0.1:8000/movies/1" -H "Content-Type: application/json" -d '{"description":"夢の中でミッションを遂行"}'
```
```bash
curl -X DELETE "http://127.0.0.1:8000/movies/1"
```


## 📝 学んだこと
- FastAPIによるAPI設計とエンドポイントの定義
- Pydanticを用いたバリデーション
- SQLAlchemyでのORM操作
- SQLiteでのデータ保存とCRUDの実装

## ✍️ 今後の課題
- 入力バリデーションの追加
- テストコードの導入（pytestなど）
- 認証機能の実装
- PostgreSQLやMySQLなどの対応
