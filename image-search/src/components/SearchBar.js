import { useState } from "react";

import "../styles/SearchBar.css";

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent browser from calling the app itself, trying to supply the input values, and reloading the page.

    onSubmit(searchTerm);
  };

  const handleChange = (event) => {
    // event.target.value is the value currently in the input tag
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        {/* {searchTerm.length < 3 && "Must search with more than 3 characters."} */}
        <input
          value={searchTerm}
          onChange={handleChange}
          placeholder="Let's find some pictures!"
          name="search-term"
        />
      </form>
    </div>
  );
}

export default SearchBar;
