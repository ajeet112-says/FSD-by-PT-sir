import React from "react";

function MovieCard({ number, title, image }) {
  return (
    <div className="movie">
      <span>{number}</span>

      <img src={image} alt={title} />

      <h3>{title}</h3>
    </div>
  );
}

export default MovieCard;