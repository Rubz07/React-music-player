import React, { useState, useEffect } from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <img
        src={currentSong.cover}
        className="song__img"
        alt={`Cover of song ${currentSong.name} by ${currentSong.artist}`}
      />
      <h2 className="song__title">{currentSong.name}</h2>
      <h3 className="song__artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
