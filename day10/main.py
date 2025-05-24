from fastapi import FastAPI
from fastapi import status
from fastapi import HTTPException
from pydantic import BaseModel
from typing import List


app = FastAPI()

class Book(BaseModel):
    id: int
    title: str
    author: str
    is_borrowed: bool = False

class BookUpdate(BaseModel):
    is_borrowed: bool

#仮のデータベース
book_db: List[Book] = []

#データベースに登録
@app.post("/book", status_code = status.HTTP_201_CREATED)
def create_book(book: Book):
    #ID Check
    for existing_book in book_db:
        if existing_book.id == book.id:
            raise HTTPException(status_code = 404, detail = "ID already exists")

    book_db.append(book)
    return {"message": "Book added successfully", "book": book}

#データベースから取得する
@app.get("/book/{book_id}")
def get_book(book_id: int):
    #Select ID
    for book in book_db:
        if book.id == book_id:
            return book

    raise HTTPException(status_code = 404, detail = "Book not found")

#本の貸出状況を更新
@app.patch("/book/{book_id}")
def update_book(book_id: int, book_update: BookUpdate):
    #Select ID
    for book in book_db:
        if book.id == book_id:
            book.is_borrowed = book_update.is_borrowed
            return {"message": "Book updated successfully", "book": book}

    raise HTTPException(status_code = 404, detail = "Book not found")

#指定したbook_dbを削除
@app.delete("/book/{book_id}")
def delete_book(book_id: int):
    #book_idとdbのindex番号で削除操作
    for index, book in enumerate(book_db):
        if book.id == book_id:
            del book_db[index]
            return {"message": f"Book with ID {book_id} deleted"}

    raise HTTPException(status_code = 404, detail = "Book not found")
