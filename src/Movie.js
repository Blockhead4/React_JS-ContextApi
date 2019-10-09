import React from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default Movie;
