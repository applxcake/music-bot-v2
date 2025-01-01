import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=YOUR_YT_API_KEY`
      );
      onResults(response.data.items);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="p-2 rounded bg-gray-900 text-white w-full"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="text-green-500">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
