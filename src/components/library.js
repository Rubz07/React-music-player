import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "library--show" : ""}`}>
      <h2 className="library__title">Library</h2>
      <div className="library__songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
