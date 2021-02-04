import React, { useState } from "react";
//importing styles
import "./style/app.scss";
//Importing Components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/library";
//importing util(songs)
import Data from "./util";
function App() {
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
