import './VideoPlayer.scss'

import VideoList from '../VideoList/VideoList.js';
import Comment from '../Comment/Comment.js';

import Likes_icon from '../../assets/icons/likes.svg';
import Views_icon from '../../assets/icons/views.svg';
import Play_icon from '../../assets/icons/play.svg';
import FullScreen_icon from '../../assets/icons/fullscreen.svg';
import VolumeUp_icon from '../../assets/icons/volume_up.svg';


function VideoPlayer (props) {
    let CurrentVideo_timestamp = props.CurrentVideoInfo.timestamp;
    function TimestampConverter(timestamp_input) {
        let timestamp = new Date(timestamp_input);
        let timestamp_year = timestamp.getFullYear();
        let timestamp_month = ("00" + (timestamp.getMonth() + 1)).slice(-2);
        let timestamp_date = ("00" + timestamp.getDate()).slice(-2);
        let date = (timestamp_month + "/" + timestamp_date + "/" + timestamp_year);
        return date;
    }
    let CurrentVideo_datetime = TimestampConverter(CurrentVideo_timestamp);

    return (
        <>
            <section className="VideoPlayer__video">
                <video className= "VideoPlayer__video--currentvideo" poster={props.CurrentVideoInfo.image}></video>
                <div className= "VideoPlayer__video--icon">
                    <div className= "VideoPlayer__section--left">
                        <img className= "VideoPlayer-icon__play" src={Play_icon} alt="Play Icon" />
                    </div>
                    <div className= "VideoPlayer__section--middle">
                    </div>
                    <div className="VideoPlayer-icon__progressbar"></div>
                    <div className="VideoPlayer-icon__timeleft">
                        <span>0:00/4:01</span>
                    </div>
                    <div className= "VideoPlayer__section--right">
                        <img className= "VideoPlayer-icon__fullscreen" src={FullScreen_icon} alt="Full Screen Icon" />
                        <img className= "VideoPlayer-icon__volumeup" src={VolumeUp_icon} alt="Volume Up Icon" />
                    </div>

                </div>
            </section>

            <section className="VideoPlayer__detail">
                <div className="VideoPlayer__detail--left">
                    <div className="VideoPlayer__info">
                        <div className="VideoPlayer__info--title">
                            <span className="VideoPlayer-title__title sectionheader">{props.CurrentVideoInfo.title}</span>
                            <div className="VideoPlayer-title__subtitle">
                                <span className="VideoPlayer-subtitle__channel">By {props.CurrentVideoInfo.channel}</span>
                                <span className="VideoPlayer-subtitle__timestamp"> {CurrentVideo_datetime} </span>
                                <div className="VideoPlayer-subtitle__viewssection">
                                    <img className="VideoPlayer-subtitle__viewsicon" src={Views_icon} alt="Views Icon"/>
                                    <span className="VideoPlayer-subtitle__views">{props.CurrentVideoInfo.views}</span>
                                </div>
                                <div className="VideoPlayer-subtitle__likessection">
                                    <img className="VideoPlayer-subtitle__likesicon" src={Likes_icon} alt="Like Icon"/>
                                    <span className="VideoPlayer-subtitle__likes">{props.CurrentVideoInfo.likes}</span>
                                </div>
                                
                            </div>
                        </div>

                        <span className="VideoPlayer-title__description bodycopy">{props.CurrentVideoInfo.description}</span>
                    </div>
                    <Comment Comment_List = {props.CurrentVideoInfo.comments}/>
                </div>
                <div className="VideoPlayer__detail--right">
                    <VideoList AllVideosInfo = {props.AllVideosInfo} UpdateCurrentVideoId={props.UpdateCurrentVideoId} currentVideoId={props.currentVideoId} defaultVideoId={props.defaultVideoId}/>
                </div>
            </section>
        </>
    );
}

export default VideoPlayer;