import React from "react";
//importing styles
import "./style/app.scss";

//Importing Components
import Song from "./components/Song";
import Player from "./components/Player";
function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
