import './App.scss';
import './styles/global.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import UploadVideo from './components/UploadVideo/UploadVideo.js';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="upload" element={<UploadVideo />} />
          <Route path="video/:videoId" element={<Header />} />
          <Route path='*'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
