import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  //   const [, setId] = useState("");
  const [, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const updateId = obj => {
    return obj.length;
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: updateId(prevMovies) }
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
