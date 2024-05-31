// MoviesList.js
import React from 'react';
import { useParams } from 'react-router-dom';

function MoviesList() {
  const { productionHouse } = useParams();

  // Fetch and display movies for the specified production house
  // You can replace this with your actual data-fetching logic
  const movies = [
    { id: 1, title: 'Movie 1', productionHouse: 'Disney' },
    { id: 2, title: 'Movie 2', productionHouse: 'Disney' },
    // ... other movies for different production houses
  ];

  // Filter movies based on the current production house
  const filteredMovies = movies.filter(movie => movie.productionHouse.toLowerCase() === productionHouse.toLowerCase());

  return (
    <div>
      <h2>{productionHouse} Movies</h2>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
