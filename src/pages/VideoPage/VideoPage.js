import './VideoPage.scss';
import { useParams, Navigate } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.js';

function VideoPage(props) {
    const { videoId } = useParams();

    //Default Video Id
    if (videoId === props.defaultVideoId) {
        props.UpdateCurrentVideoId(videoId);
        return <Navigate to="/" />
    }

    //Other Video Id
    else {
        props.UpdateCurrentVideoId(videoId);
        return (
            <>
                <VideoPlayer AllVideosInfo={props.AllVideosInfo} CurrentVideoInfo={props.CurrentVideoInfo} currentVideoId={props.currentVideoId} UpdateCurrentVideoId={props.UpdateCurrentVideoId} defaultVideoId={props.defaultVideoId}/>
            </>
        );
    }

}

export default VideoPage;