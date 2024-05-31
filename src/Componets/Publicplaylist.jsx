import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PublicPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('https://backendmovieapp-2t25.onrender.com/author/getPublicPlaylist');
        setPlaylists(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Public Playlists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div key={playlist._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={playlist.image || 'https://via.placeholder.com/150'} alt={playlist.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{playlist.title}</h2>
              <p className="text-gray-600">{playlist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicPlaylist;
