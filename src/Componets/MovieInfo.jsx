import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieInfo({location}) {
    const movie = location.state && location.state.movie;
    console.log(movie);
    if (!movie) {
      // Handle case when movie prop is not available
      return <div>No movie data available</div>;
    }
  return (
    <div className='space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6'>
      
     

      <header
        className="bg-cover bg-center flex flex-col  filter brightness-45"
        style={{ backgroundImage: `url("${IMAGE_BASE_URL + movie.backdrop_path}")`, height: '100vh' }}
      >
       
       <div class="max-w-prose flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
  <div class="flex flex-col items-start text-white mt-5">
    <h1 class="text-4xl font-bold mb-4">{movie.original_title}</h1>
    <p class="text-lg text-gray-300 mb-4">original language:{movie.original_language}</p>
    <p class="text-lg text-gray-300 mb-4">Adult: {movie.adult}</p>
    <p class="text-lg text-gray-300 mb-4">Overview:{movie.overview}.</p>
    <p class="text-lg text-gray-300 mb-4">Popularity: {movie.popularity}</p>
    <p class="text-lg text-gray-300 mb-4">Release Date: {movie.release_date}</p>
    <p class="text-lg text-gray-300 mb-4">rating:{movie.vote_average}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Subscribe to watch
    </button>
  </div>
  <div class="flex-shrink-0">
  </div>
</div> 
      </header>
    </div>


   
  )
}

export default MovieInfo