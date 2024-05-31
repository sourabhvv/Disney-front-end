import React, { useState, useEffect } from "react";
import axios from "axios";
import AllMovies from "./AllMovies";

function Explore() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const initialMovies = [
      // Add initial movie list here if needed
    ];
    setMovies(initialMovies);
    setFilteredMovies(initialMovies);
  }, []);

  function handleSearchInput(event) {
    setSearchVal(event.target.value);
  }

  function handleYearInput(event) {
    setYear(event.target.value);
  }

  function handleSearchButtonClick() {
    if (searchVal.length > 2) {
      const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=f2933099${year ? `&y=${year}` : ''}`;
      axios.get(url)
        .then(response => {
          if (response.data.Search) {
            const fetchedMovies = response.data.Search.map(movie => ({
              id: movie.imdbID,
              title: movie.Title,
              image: movie.Poster,
            }));
            setFilteredMovies(fetchedMovies);
          } else {
            setFilteredMovies([]);
          }
        })
        .catch(error => {
          console.error("Error fetching data from OMDB API", error);
        });
    } else {
      setFilteredMovies(movies);
    }
  }

  return (
    <>
      <header className="space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 bg-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-100">Movies Explorer</h2>
        </div>
        <form className="flex flex-col md:flex-row w-full max-w-8xl bg-gray-800 rounded-lg p-4" onSubmit={e => e.preventDefault()}>
          <div className="relative flex-grow">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg leading-8 text-slate-100 placeholder-slate-400 rounded-md py-3 pl-10 bg-gray-700"
              type="text"
              aria-label="Search movies"
              placeholder="Movies, shows and more"
              onChange={handleSearchInput}
              value={searchVal}
            />
          </div>
          <div className="relative mt-2 md:mt-0 md:ml-4">
            <input
              className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg leading-8 text-slate-100 placeholder-slate-400 rounded-md py-3 pl-10 bg-gray-700"
              type="number"
              aria-label="Search by year"
              placeholder="Year"
              onChange={handleYearInput}
              value={year}
            />
          </div>
          <button
            className="mt-2 md:mt-0 md:ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            type="button"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </form>
      </header>

      <div className="space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 bg-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-100">Search Results</h2>
        </div>
        <AllMovies movies={filteredMovies} />
      </div>
    </>
  );
}

export default Explore;
