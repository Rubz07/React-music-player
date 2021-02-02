import React,{useRef,useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay,faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons"
const Player=({currentSong,isPlaying,setIsPlaying})=>{
    //ref
const audioRef=useRef(null)
//Event handler
    const currentSongHandler=()=>{
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
            //if playing set the state to false
        }
        else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)//if not playing set the state to true
        }
    }

const timeUpdateHandler=(e)=>{
const current=e.target.currentTime;
const duration=e.target.duration;
setSongInfo({...songInfo,currentTime:current ,duration:duration})
    }

   const getTime=(time)=>{
return(
    Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
)
   } 

   const draghandler=(e)=>{
       audioRef.current.currentTime=e.target.value
setSongInfo({...songInfo, currentTime:e.target.value})
   }
//State to define the time
    const [songInfo,setSongInfo]=useState({
        currentTime:null,
        duration:null,
    })
    return(
<div className="player">
  <div className="time-cotrol">
      <p>{getTime(songInfo.currentTime)}</p>
      <input min={0}  max={songInfo.duration} value={songInfo.currentTime} onChange={draghandler} type='range' />
      <p>{getTime(songInfo.duration
        )}</p>
  </div>
  <div className="play-control">
<FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleLeft}/>
<FontAwesomeIcon className="play" onClick={currentSongHandler} size="2x" icon={faPlay}/>
<FontAwesomeIcon className="skip-backword" size="2x" icon={faAngleRight}/>
</div>  
<audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
</div>
    )
}
export default Player