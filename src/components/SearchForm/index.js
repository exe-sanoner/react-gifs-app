import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navegar a otra ruta
    // pushLocation(`/search/${keyword}`);
    // console.log('🐤',keyword);
    onSubmit({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        onChange={handleChange}
        placeholder="Search a gif here..."
        type="text"
        value={keyword}
      />
      {/* <input type="submit" value="Buscar" /> */}
    </form>
  );
}

export default React.memo(SearchForm);
