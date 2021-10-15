import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
}) => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

  const audioRef = useRef(null);
  const isInitialMount = useRef(true);

  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
    animationProcentage: 0,
  });

  //functions
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //hanlders
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;

    setSongInfo({ ...songInfo, currentTime });
  };

  const setDurationHandler = (e) => {
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, duration });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const autoSkipSongHandler = async () => {
    currentIndex++;
    if (currentIndex > songs.length - 1) {
      setCurrentSong(songs[0]);
      audioRef.current.pause();
    } else {
      setCurrentSong(songs[currentIndex]);
    }
  };

  const skipSongHandler = async (direction) => {
    if (direction === "prev") {
      await setCurrentSong(songs[currentIndex - 1 < 0 ? 0 : currentIndex - 1]);
    } else {
      await setCurrentSong(
        songs[
          currentIndex + 1 > songs.length - 1
            ? songs.length - 1
            : currentIndex + 1
        ]
      );
    }
  };

  //effects
  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  return (
    <div className="player">
      <div className="player__time">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div
            style={{
              transform: `translateX(${
                (songInfo.currentTime * 100) / songInfo.duration
              }%)`,
            }}
            className="track-animated"
          ></div>
        </div>
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon
          className="prev"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipSongHandler("prev")}
        />
        <FontAwesomeIcon
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="next"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipSongHandler("next")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={setDurationHandler}
        onEnded={autoSkipSongHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
