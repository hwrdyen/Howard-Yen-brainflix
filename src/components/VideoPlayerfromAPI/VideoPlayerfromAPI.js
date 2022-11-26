import './VideoPlayerfromAPI.scss';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

import Video_details from '../../data/video-details.json';
import Comment from '../Comment/Comment.js';
import VideoList from '../VideoList/VideoList.js';
import Likes_icon from '../../assets/icons/likes.svg';
import Views_icon from '../../assets/icons/views.svg';
import Play_icon from '../../assets/icons/play.svg';
import FullScreen_icon from '../../assets/icons/fullscreen.svg';
import VolumeUp_icon from '../../assets/icons/volume_up.svg';

function VideoPlayerfromAPI() {
    const [Loading, setLoading] = useState(true);
    const [VideoDetailsfromAPI, setVideoDetailsfromAPI] = useState([]);
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
  
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const result = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=0b0e0e2e-c252-4734-a026-f576bec3ca40`)
                setVideoDetailsfromAPI(result.data);
            }
            catch(error) {
                console.log(error.message);
            }
            setLoading(false);
        }

        fetchData();

    }, [])
    console.log(VideoDetailsfromAPI);
    console.log(typeof(VideoDetailsfromAPI));
    VideoDetailsfromAPI.map(x => {
        console.log(x.title);
    })


    return (
        <>
            {!Loading && (
            <div>
                {VideoDetailsfromAPI.map(x => {
                    <span>{x.title}</span>
                })}
            </div>
            )}
        </>
    );

}

export default VideoPlayerfromAPI;