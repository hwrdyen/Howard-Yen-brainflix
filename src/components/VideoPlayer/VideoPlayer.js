import './VideoPlayer.scss';
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

function VideoPlayer() {
    const [CurrentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [VideoDetails, setVideoDetails] = useState(Video_details);
    const CurrentPlaying_timestamp = Video_details[CurrentVideoIndex].timestamp;
    const [CurrentPlaying_DateTime, setCurrentPlaying_DateTime] = useState(CurrentPlaying_timestamp);
    function TimestampConverter(timestamp_input) {
        let timestamp = new Date(timestamp_input);
        let timestamp_year = timestamp.getFullYear();
        let timestamp_month = ("00" + (timestamp.getMonth() + 1)).slice(-2);
        let timestamp_date = ("00" + timestamp.getDate()).slice(-2);
        let date = (timestamp_month + "/" + timestamp_date + "/" + timestamp_year);
        return date;
    }
    const currentplaying_datetime = TimestampConverter(CurrentPlaying_DateTime);

    const updateCurrentVideoIndex = (SelectVideo_index) => {
        console.log(SelectVideo_index);
        setCurrentVideoIndex(SelectVideo_index);
    }

    const AddNewCommenttoDatabase = (newcreated_comment) => {
        console.log(newcreated_comment);
        const NewComment = {id: "000", name: "Name", comment: newcreated_comment, timestamp: "000"}
        const UpdateVideoDetails = [...VideoDetails];
        for (let i = 0; i<VideoDetails.length; i++) {
            if (CurrentVideoIndex === i) {
                const NewCommentList = [...VideoDetails[i].comments, NewComment];
                UpdateVideoDetails[i].comments = NewCommentList;
            }
        }
        setVideoDetails(UpdateVideoDetails);
    }

    return (
        <>
            <section className="VideoPlayer__video">
                <video className= "VideoPlayer__video--currentvideo" poster={VideoDetails[CurrentVideoIndex].image}></video>
                <div className= "VideoPlayer__video--icon">
                    <div className= "VideoPlayer__section--left">
                        <img className= "VideoPlayer-icon__play" src={Play_icon}/>
                    </div>
                    <div className= "VideoPlayer__section--middle">
                    </div>
                    <div className="VideoPlayer-icon__progressbar"></div>
                    <div className="VideoPlayer-icon__timeleft">
                        <span>0:00/4:01</span>
                    </div>
                    <div className= "VideoPlayer__section--right">
                        <img className= "VideoPlayer-icon__fullscreen" src={FullScreen_icon}/>
                        <img className= "VideoPlayer-icon__volumeup" src={VolumeUp_icon}/>
                    </div>

                </div>

            </section>
            <section className="VideoPlayer__detail">
                <div className="VideoPlayer__detail--left">
                    <div className="VideoPlayer__info">
                        <div className="VideoPlayer__info--title">
                            <span className="VideoPlayer-title__title sectionheader">{VideoDetails[CurrentVideoIndex].title}</span>
                            <div className="VideoPlayer-title__subtitle">
                                <span className="VideoPlayer-subtitle__channel">By {VideoDetails[CurrentVideoIndex].channel}</span>
                                <span className="VideoPlayer-subtitle__timestamp"> {currentplaying_datetime} </span>
                                <div className="VideoPlayer-subtitle__viewssection">
                                    <img className="VideoPlayer-subtitle__viewsicon" src={Views_icon}/>
                                    <span className="VideoPlayer-subtitle__views">{VideoDetails[CurrentVideoIndex].views}</span>
                                </div>
                                <div className="VideoPlayer-subtitle__likessection">
                                    <img className="VideoPlayer-subtitle__likesicon" src={Likes_icon}/>
                                    <span className="VideoPlayer-subtitle__likes">{VideoDetails[CurrentVideoIndex].likes}</span>
                                </div>
                                
                            </div>
                        </div>

                        <span className="VideoPlayer-title__description bodycopy">{VideoDetails[CurrentVideoIndex].description}</span>
                    </div>
                    <Comment comment_list = {VideoDetails[CurrentVideoIndex].comments} AddNewCommenttoDatabase = {AddNewCommenttoDatabase}/>
                </div>
                <div className="VideoPlayer__detail--right">
                    <VideoList CurrentVideoIndex = {CurrentVideoIndex} updateCurrentVideoIndex = {updateCurrentVideoIndex} VideoDetails = {VideoDetails}/>
                </div>
            </section>

        </>
    );

}

export default VideoPlayer;