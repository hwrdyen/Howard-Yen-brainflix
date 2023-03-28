import './App.scss';
import './styles/global.scss';

import { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './pages/Header/Header.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import UploadVideo from './pages/UploadVideo/UploadVideo.js';
import VideoPage from './pages/VideoPage/VideoPage.js';

function App() {
  const [defaultVideoId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
  const [currentVideoId, setcurrentVideoId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
  const [CurrentVideoInfo, setCurrentVideoInfo] = useState({});
  const [CurrentVideoInfoLoading, setCurrentVideoInfoLoading] = useState(true);
  const [AllVideosInfo, setAllVideosInfo] = useState([]);
  const [AllVideosInfoLoading, setAllVideosInfoLoading] = useState(true);
  const [RequiredVideoLoading, setRequiredVideoLoading] = useState(true);

  useEffect(() => {
    function GetAllVideosInfo() {
      return axios.get(`https://howard-brainflix-api.herokuapp.com/videos`)
      .then((element) => {
          let videos_info = element.data;
          setAllVideosInfo(videos_info);
          setAllVideosInfoLoading(false);
          setRequiredVideoLoading(false);
      })
    }
    if (RequiredVideoLoading === true) {
      GetAllVideosInfo();
    }

  }, [AllVideosInfo])

  useEffect(() => {
    function GetSingleVideoInfo() {
      return axios.get(`https://howard-brainflix-api.herokuapp.com/videos/${currentVideoId}`)
      .then((element) => {
        let currentvideo_info = element.data;
          setCurrentVideoInfo(currentvideo_info);
          setCurrentVideoInfoLoading(false);
      })
    }

    GetSingleVideoInfo();
  }, [currentVideoId])

  function UpdateCurrentVideoId(UpdatedVideoId) {
    setcurrentVideoId(UpdatedVideoId);
    console.log(currentVideoId);
  }

  if (AllVideosInfoLoading || CurrentVideoInfoLoading) {
    return <div>Loading...</div>;
  }

  else {
    return (
      <>
        <BrowserRouter>
          <Header UpdateCurrentVideoId={UpdateCurrentVideoId} defaultVideoId={defaultVideoId} />
          <Routes>
            <Route path="/" element={<VideoPlayer AllVideosInfo={AllVideosInfo} CurrentVideoInfo={CurrentVideoInfo} currentVideoId={currentVideoId} UpdateCurrentVideoId={UpdateCurrentVideoId} defaultVideoId={defaultVideoId}/>} />
            <Route path="upload" element={<UploadVideo setAllVideosInfo={setAllVideosInfo} AllVideosInfo={AllVideosInfo} setRequiredVideoLoading={setRequiredVideoLoading}/>} />
            <Route path="/videos/:videoId" element={<VideoPage AllVideosInfo={AllVideosInfo} CurrentVideoInfo={CurrentVideoInfo} currentVideoId={currentVideoId} UpdateCurrentVideoId={UpdateCurrentVideoId} defaultVideoId={defaultVideoId}/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }


}

export default App;
