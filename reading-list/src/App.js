import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  getAllBooks,
  postBooks,
  putBookById,
  deleteBookById,
} from "./clients/backendClient";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const results = await getAllBooks();
    setBooks(results);
  };

  const createBook = (title) => {
    const book = { id: uuidv4(), title: title };
    setBooks([...books, book]);
    postBooks(book);
  };

  const editBook = (id, newTitle) => {
    let updatedBook = null;
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        updatedBook = { ...book, title: newTitle };
        return updatedBook;
      }
      return book;
    });
    setBooks(updatedBooks);
    putBookById(id, updatedBook);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
    deleteBookById(id);
  };

  // This can run a passed in function at specific points in time based on the 2nd arg.
  //  - Always called on initialization
  //  - Can be called on subsequent re-renders based on 2nd arg.
  //    - [] - called ONLY on 1st render and NEVER again
  //    - <nothing for 2nd arg> - Call on the 1st render and EVERY other render
  //    - [<counter_var>, (can contain more than one)] - Called on 1st Render and then if variables within the array change.
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
