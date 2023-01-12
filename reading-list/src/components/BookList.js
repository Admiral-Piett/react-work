import BookShow from "./BookShow";

const BookList = ({ books, onEdit, onDelete }) => {
  const renderedBooks = books.map((book, i) => {
    return (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
