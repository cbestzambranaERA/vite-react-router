import { Routes, Route } from "react-router-dom"
import { Book } from "./Book.jsx"
import { BookList } from "./BookList.jsx"
import { NewBook } from "./NewBook.jsx"
import { BookLayout } from "./BookLayout.jsx"

export function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  )
}