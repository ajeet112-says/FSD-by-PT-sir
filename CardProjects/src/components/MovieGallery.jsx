import React from "react";
import MovieCard from "./MovieCard";

import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";
import movie5 from "../images/movie5.jpg";
import movie6 from "../images/movie6.jpg";
import movie7 from "../images/movie7.jpg";
import movie8 from "../images/movie8.jpg";
import movie9 from "../images/movie9.jpg";
import movie10 from "../images/movie10.jpg";

function MovieGallery() {
  return (
    <div className="card">

      <header>
         
        <h1>IMDB 2025MOST POPULAR MOVIES</h1>
      </header>

      <div className="movies">

        <MovieCard number="1" title="The Shawshank Redemption" image={movie1} />
        <MovieCard number="2" title="The Godfather" image={movie2} />
        <MovieCard number="3" title="The Dark Knight" image={movie3} />
        <MovieCard number="4" title="The Godfather Part II" image={movie4} />
        <MovieCard number="5" title="12 Angry Men" image={movie5} />
        <MovieCard number="6" title="Schindler's List" image={movie6} />
        <MovieCard number="7" title="The Lord of the Rings" image={movie7} />
        <MovieCard number="8" title="Pulp Fiction" image={movie8} />
        <MovieCard number="9" title="The Good, the Bad and the Ugly" image={movie9} />
        <MovieCard number="10" title="Forrest Gump" image={movie10} />

      </div>

    </div>
  );
}

export default MovieGallery;