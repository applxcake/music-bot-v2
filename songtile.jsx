import React from 'react';

const SongTile = ({ title, thumbnail, onPlay }) => {
  return (
    <div
      className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform"
      onClick={onPlay}
    >
      <img src={thumbnail} alt={title} className="rounded-md mb-2" />
      <h3 className="text-green-500 font-semibold">{title}</h3>
    </div>
  );
};

export default SongTile;
