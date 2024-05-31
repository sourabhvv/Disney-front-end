import React from 'react'
import {Link} from 'react-router-dom'
import ProductionHouse from './ProductionHouse';

function AllMovies({movies}) {
  return (
    <>
     <div className="p-8 px-8 md:px-16">
      <h2 className="text-[20px] text-white font-bold"></h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies-Details/${movie.id}`} className="hover:scale-110 transition-all duration-150 ease-in">
            <div className="flex flex-col items-center">
              <img
             
                src={movie.image}
                alt={movie.title}
                className="w-[80px] md:w-[200px] rounded-lg hover:border-[2px] border-gray-400 cursor-pointer"
              />
              <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default AllMovies