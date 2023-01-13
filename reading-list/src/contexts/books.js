import { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  deleteBookById,
  getAllBooks,
  postBooks,
  putBookById,
} from "../clients/backendClient";

const BooksContext = createContext({});

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // useCallback maintains a pointer to the original `fetchBooks` function and returns that pointer when called.  The
  // reason for it is that all these functions get "rebuilt" alongside this component every time the `books` state
  // changes. We can have `useEffect` watch this function and make sure, that it only re-renders when this function
  // changes (in our case, once).
  const fetchBooks = useCallback(async () => {
    const results = await getAllBooks();
    setBooks(results);
  }, []);

  const createBook = (title) => {
    console.log("create book");
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

  const contextValue = {
    books,
    fetchBooks,
    createBook,
    editBook,
    deleteBook,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider };
export default BooksContext;
