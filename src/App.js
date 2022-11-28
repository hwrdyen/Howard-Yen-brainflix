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
  const [defaultVideoId, setdefaultVideoId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
  const [currentVideoId, setcurrentVideoId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
  const [CurrentVideoInfo, setCurrentVideoInfo] = useState({});
  const [CurrentVideoInfoLoading, setCurrentVideoInfoLoading] = useState(true);
  const [AllVideosInfo, setAllVideosInfo] = useState([]);
  const [AllVideosInfoLoading, setAllVideosInfoLoading] = useState(true);
  let api_key = undefined;

  function GetRegister() {
      if (api_key === undefined) {
          return axios.get("https://project-2-api.herokuapp.com/register").then((response) => {
              api_key = response.data.api_key;
              return Promise.resolve(api_key);
          })
      }
      else {
          return Promise.resolve(api_key);
      }
  }

  function GetAllVideosInfo() {
    GetRegister().then((api_key) => {
      return axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${api_key}`)
      .then((element) => {
          let videos_info = element.data;
          setAllVideosInfo(videos_info);
          setAllVideosInfoLoading(false);
      })
    })
  }

  useEffect(() => {
    GetAllVideosInfo();
  }, [])

  function GetSingleVideoInfo() {
    GetRegister().then((api_key) => {
      return axios.get(`https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=${api_key}`)
      .then((element) => {
        let currentvideo_info = element.data;
          setCurrentVideoInfo(currentvideo_info);
          setCurrentVideoInfoLoading(false);
      })
    })
  }

  useEffect(() => {
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
        {/* {
          AllVideosInfo.map(item => {
            return <span>{JSON.stringify(item)}</span>
          })
        }
        <div>{CurrentPlayingVideoInfoId}</div> */}
        <BrowserRouter>
          <Header UpdateCurrentVideoId={UpdateCurrentVideoId} defaultVideoId={defaultVideoId} />
          <Routes>
            {/* <Route path='*' element={<NotFound/>}/> */}
            <Route path="/" element={<VideoPlayer AllVideosInfo={AllVideosInfo} CurrentVideoInfo={CurrentVideoInfo} currentVideoId={currentVideoId} UpdateCurrentVideoId={UpdateCurrentVideoId} defaultVideoId={defaultVideoId}/>} />
            <Route path="upload" element={<UploadVideo />} />
            <Route path=":videoId" element={<VideoPage AllVideosInfo={AllVideosInfo} CurrentVideoInfo={CurrentVideoInfo} currentVideoId={currentVideoId} UpdateCurrentVideoId={UpdateCurrentVideoId} defaultVideoId={defaultVideoId}/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }


}

export default App;
