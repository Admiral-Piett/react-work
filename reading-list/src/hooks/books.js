import {useContext} from "react";

import BooksContext from "../contexts/books";

export const useBooksContext = () => {
  return useContext(BooksContext);
};
