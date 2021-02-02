import React, { useState } from "react";
//importing styles
import "./style/app.scss";
//Importing Components
import Song from "./components/Song";
import Player from "./components/Player";
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
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
