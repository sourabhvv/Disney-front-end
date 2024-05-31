import React from 'react'
import { useParams } from 'react-router-dom'


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
function MoviesDetail() {

    const {id} = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id, 10));

 if (!movie) {
    return <div>Movies not Found !</div>
    }

    const fakeDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const fakeGenres = ['Action', 'Adventure', 'Fantasy'];
  const fakeReleaseDate = '2022-01-01';
  const fakeDuration = '2h 30m';

  return (
    <>
    
    <header
        className="bg-cover bg-center flex flex-col items-center justify-center filter brightness-75"
        style={{ backgroundImage: `url("${movie.image}")`, height: '100vh' }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Subscribe to watch
          </button>
        </div>
      </header>
    </>  
  );


}

export default MoviesDetail