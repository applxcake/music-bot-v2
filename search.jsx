import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SongTile from './SongTile';

const Search = ({ onPlay }) => {
  const [results, setResults] = useState([]);

  return (
    <div className="p-4">
      <SearchBar onResults={setResults} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {results.map((result) => (
          <SongTile
            key={result.id.videoId}
            title={result.snippet.title}
            thumbnail={result.snippet.thumbnails.medium.url}
            onPlay={() => onPlay(result.id.videoId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
