import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';// Ensure you import the toast function
function MoviesDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  const Addplaylist  = async(e) =>{
    e.preventDefault();


    await axios.post("http://localhost:5000/author/createPlaylist",
    {
      title:movie.Title,
      movieId:id
    },{
        headers: {
       
          Authorization: `Bearer ${token}`,
        }
        
      }).then(function(response){
      if(response.status==200){
            toast(`👌 ${response.data.message}!`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
           
        
           
      }
      }).catch(function(error){
           toast.error('😟 error occured!', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
      });





  }  
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=f2933099`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie || movie.Response === 'False') {
    return <div>Movie not Found!</div>;
  }

  return (
    <>
    <ToastContainer />
     


      <div className='space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6'>
      
     

      <header
        className="bg-cover bg-center flex flex-col  filter brightness-45"
        style={{ backgroundImage: `url("${movie.Poster}")`, height: '100vh' }}
      >
       
       <div class="max-w-prose flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
  <div class="flex flex-col items-start text-white mt-5">
    <h1 class="text-4xl font-bold mb-4">{movie.Title}</h1>
    <p class="text-lg text-gray-300 mb-4">original language:{movie.Language}</p>
    <p class="text-lg text-gray-300 mb-4">Plot: {movie.Plot}</p>
    <p class="text-lg text-gray-300 mb-4">Release Date: {movie.Released}</p>
    <p class="text-lg text-gray-300 mb-4">rating:{movie.imdbRating}</p>
    <button onClick={Addplaylist} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to playlist
          </button>
  </div>
  <div class="flex-shrink-0">
  </div>
</div> 
      </header>
    </div>






      
    </>
  );
}

export default MoviesDetail;
