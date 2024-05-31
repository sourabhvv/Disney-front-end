import React, { useState } from "react";
import AllMovies from "./AllMovies";




function Explore() {
  const movies = [
    { 

      id:1,
      title: 'Avengers Endgame',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5158/875158-v',
    },
    
    { 
      id:2,
      title: 'Guardians of the Galaxy Vol. 3',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7487/1557487-v-7443ca868089',
    },

    { 
      id:3,
      title: 'Aladin ',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5151/875151-v',
    },

    { 
      id:4,
      title: 'Moana 2016',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8258/1548258-v-0afc42d2d4b8',
    },

    { 
      id:5,
      title: 'Frozen 2 2019',
      image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5203/875203-v',
    },
    {   id:6,
        title: 'Disneys Mulan ',
        image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6662/846662-v',
    },
      
    { 
     id:7,
        title: 'The Lion King ',
        image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8273/1548273-v-df27a233f460',
    },
  
      { 
        id:8,
        title: 'Aladin ',
        image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5151/875151-v',
      },
  
      { 
        id:9,
        title: 'Moana 2016',
        image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8258/1548258-v-0afc42d2d4b8',
      },
  
      { 
        id:10,
        title: 'Frozen 2 2019',
        image: 'https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5203/875203-v',
      },
      {
        id:11,
        title:'The Marvels',
        image:'https://image.tmdb.org/t/p/original/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
      },
  ];
  const [filteredMovies,setFilteredMovies] = useState(movies);
  const [searchVal,setSearchVal] = useState("");
  
  function handleSearchInput(event) {
    const value = event.target.value;
    setSearchVal(value);
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  }

  return (
    <>

      <header className="space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Projects</h2>
        </div>
        <form className="bg-blue group relative ">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className=" focus:ring-2  focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg leading-8 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Movies, shows and more"
           onInput={handleSearchInput}
            value={searchVal}
          />
          

        </form>
      </header>
      

      <div className="space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-white">Popular Searches</h2>
        </div>

      <AllMovies movies={filteredMovies} />
      </div>
    </>
  );
}

export default Explore;
