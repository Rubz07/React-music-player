import React, { useEffect } from "react";

const LibrarySong = ({
  song,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
}) => {
  const setCurrentSongHandler = () => {
    setCurrentSong(song);
  };

  useEffect(() => {
    const activeSongs = songs.map((state) => {
      if (state.id === currentSong.id) return { ...state, active: true };
      else return { ...state, active: false };
    });
    setSongs(activeSongs);
  }, [currentSong]);

  return (
    <div
      className={`library-song ${song.active ? "library-song--selected" : ""}`}
      onClick={setCurrentSongHandler}
    >
      <img
        src={song.cover}
        className="library-song__img"
        alt={`Cover of song ${song.name} by ${song.artist}`}
      />
      <div className="library-song__description">
        <h2 className="library-song__title">{song.name}</h2>
        <h3 className="library-song__artist">{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
