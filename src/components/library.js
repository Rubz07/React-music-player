
import React, { useState } from "react";
import LibrarySong from './librarySongs'
const Library=({songs,
    setSongs,
    currentSong,
    setCurrentSong,
    libraryStatus })=>{
  const[dark,setDark]=useState(false)//need to do more
    return(
        <div className={dark?"libraryDark":"library"}>
            <h1>library</h1>
            <div className="library-songs">
{songs.map((song)=>(<LibrarySong  Song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            Songs={songs}
            setSongs={setSongs}
            />))}
            </div>
        </div>
    )
}
export default Library