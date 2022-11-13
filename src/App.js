import './App.scss';
import './styles/global.scss';
// import {useState} from 'react';
import Header from './components/Header/Header.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
    </div>
  );
}

export default App;
