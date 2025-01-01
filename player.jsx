import React from 'react';
import ReactYouTube from 'react-youtube';

const Player = ({ videoId }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <ReactYouTube videoId={videoId} className="rounded-lg" />
    </div>
  );
};

export default Player;
