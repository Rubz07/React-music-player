import React,{useEffect} from "react";

const librarySong = ({ Song,setCurrentSong }) => {
    const playSelectedSongHandler=async()=>{
       await setCurrentSong(Song)
    }
  return (
    <div onClick={playSelectedSongHandler}className="librarySong">
      <img src={Song.cover} alt="music_image"></img>
      <div className="song-description">
      <h3>{Song.name}</h3>
      <h4>{Song.artist}</h4>
      </div>
  
    </div>
  );
};
export default librarySong;
