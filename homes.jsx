import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongTile from './SongTile';

const Home = ({ onPlay }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=YOUR_YT_API_KEY`
        );
        setSongs(response.data.items);
      } catch (error) {
        console.error('Error fetching trending songs', error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {songs.map((song) => (
        <SongTile
          key={song.id}
          title={song.snippet.title}
          thumbnail={song.snippet.thumbnails.medium.url}
          onPlay={() => onPlay(song.id)}
        />
      ))}
    </div>
  );
};

export default Home;
