import React, { useState } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Player from './components/Player';

function App() {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="p-4 bg-gray-900 text-green-500 text-2xl font-bold">
        MyMusic
      </header>
      <main>
        {!currentVideo ? (
          <>
            <Home onPlay={setCurrentVideo} />
            <Search onPlay={setCurrentVideo} />
          </>
        ) : (
          <Player videoId={currentVideo} />
        )}
      </main>
    </div>
  );
}

export default App;
