import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useBooksContext } from "./hooks/books";

function App() {
  const { fetchBooks } = useBooksContext();

  // This can run a passed in function at specific points in time based on the 2nd arg.
  //  - Always called on initialization
  //  - Can be called on subsequent re-renders based on 2nd arg.
  //    - [] - called ONLY on 1st render and NEVER again
  //    - <nothing for 2nd arg> - Call on the 1st render and EVERY other render
  //    - [<counter_var>, (can contain more than one)] - Called on 1st Render and then if variables within the array change.
  // useEffect can ONLY return another function for "clean up"
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
