import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Playlist() {
  const [isPublic, setIsPublic] = useState("true");
  const token = localStorage.getItem('token');

//   const movies = [
//     { id: 1, title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/original/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg' },
//     { id: 2, title: 'Inception', poster: 'https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
//     { id: 3, title: 'The Matrix', poster: 'https://image.tmdb.org/t/p/original/1X6U9u5YY7vvH5bDNPmJKOSywH9.jpg' },
//     // Add more movies as needed
//   ];
  const [movies,setMovies] = useState([]);

    useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://backendmovieapp-2t25.onrender.com/author/getPlaylist`,{
            headers: {
              Authorization: `Bearer ${token}`,
            }
            
          });
        setMovies(response.data);
        
      } catch (error) {
        console.error('Error fetching movie details:', error);
       
      }
    };

    fetchMovieDetails();
  }, []);


  const toggleVisibility = async () => {
    try {
      const response = await axios.post(
        'https://backendmovieapp-2t25.onrender.com/author/publicPlaylist',
        { publicValue: isPublic },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success(`👌 ${response.data.message}!`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        if(isPublic=="true"){
          setIsPublic("false")
        }else{
          setIsPublic("true")
        }
        
      }
    } catch (error) {
      console.error('Error toggling visibility:', error);
      toast.error('😟 Error occurred!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  

  return (
   
     
    <div className="p-4 bg-gray-800 rounded-lg">
       <ToastContainer />
      <div className="flex flex-col justify-center items-center">
      <div className="mt-4">
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPublic }
        </button>
      </div>
        <img
          src="https://image.tmdb.org/t/p/original/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
          alt="sci-fi movies"
          className="w-40 h-40"
        />
        <h1 className="text-white capitalize font-semibold text-2xl mt-2">
          Sci-Fi Movies
        </h1>
        <p className="text-xs uppercase text-gray-100 mt-1"></p>
      </div>
     

      <div className="mt-4 flex justify-center items-center ">
        <div className="mt-2">
          {movies.map((movie) => (
           <Link key={movie.id} to={`/movies-Details/${movie.movieId}`} className="hover:scale-110 transition-all duration-150 ease-in">
           <article className="flex items-start space-x-6 p-6">
      <img src={movie.image} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-white truncate pr-20">{movie.title}</h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd></dd>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded"></dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd></dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                <circle cx="1" cy="1" r="1" />
              </svg>
              
            </dd>
          </div>
          <div>
            <dt className="sr-only">Runtime</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                <circle cx="1" cy="1" r="1" />
              </svg>
              
            </dd>
          </div>
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">dsd</dd>
          </div>
        </dl>
      </div>
    </article>
           </Link>

          ))}



        </div>


      </div>
      
    </div>
  );
}

export default Playlist;
