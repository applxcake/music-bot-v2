import React, { useState } from 'react';
import home from './home';  // Correct the import
import search from './search';  // Correct the import
import player from './player';  // Correct the import

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
            <home onPlay={setCurrentVideo} />
            <search onPlay={setCurrentVideo} />
          </>
        ) : (
          <player videoId={currentVideo} />
        )}
      </main>
    </div>
  );
}

export default App;
