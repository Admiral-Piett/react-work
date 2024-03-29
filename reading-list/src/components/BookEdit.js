import {useState} from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input value={title} onChange={handleChange} className="input"></input>
        <button className="button is-primary" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
