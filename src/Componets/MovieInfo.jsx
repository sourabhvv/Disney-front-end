import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieInfo({ location }) {
    const movie = location.state && location.state.movie;
    
    if (!movie) {
        return <div>No movie data available</div>;
    }

    const [moviesinfo, setMoviesinfo] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?s=${movie.original_title}&apikey=f2933099`);
                setMoviesinfo(response.data.Search ? response.data.Search[0] : null);
                console.log(response.data.Search ? response.data.Search[0] : null);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movie.original_title]);

    const Addplaylist = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');// Replace with actual token retrieval logic

        try {
            const response = await axios.post(
                "https://backendmovieapp-2t25.onrender.com/author/createPlaylist",
                {
                    title: moviesinfo.Title,
                    movieId: moviesinfo.imdbID
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            if (response.status === 200) {
                toast.success(`👌 ${response.data.message}!`, {
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
        } catch (error) {
            toast.error('😟 error occurred!', {
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
    };

    return (
        <div className='space-y-2 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6'>
            <ToastContainer />

            <header
                className="bg-cover bg-center flex flex-col filter brightness-45"
                style={{ backgroundImage: `url("${IMAGE_BASE_URL + movie.backdrop_path}")`, height: '100vh' }}
            >
                <div className="max-w-prose flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-6 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                    <div className="flex flex-col items-start text-white mt-5">
                        <h1 className="text-4xl font-bold mb-4">{movie.original_title}</h1>
                        <p className="text-lg text-gray-300 mb-4">Original Language: {movie.original_language}</p>
                        <p className="text-lg text-gray-300 mb-4">Adult: {movie.adult ? "Yes" : "No"}</p>
                        <p className="text-lg text-gray-300 mb-4">Overview: {movie.overview}</p>
                        <p className="text-lg text-gray-300 mb-4">Popularity: {movie.popularity}</p>
                        <p className="text-lg text-gray-300 mb-4">Release Date: {movie.release_date}</p>
                        <p className="text-lg text-gray-300 mb-4">Rating: {movie.vote_average}</p>
                        <button onClick={Addplaylist} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to playlist
                        </button>
                    </div>
                    <div className="flex-shrink-0">
                        {moviesinfo && (
                            <img
                                src={`${IMAGE_BASE_URL}${moviesinfo.poster_path}`}
                                alt={moviesinfo.title}
                                className="w-full lg:w-auto"
                            />
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default MovieInfo;
