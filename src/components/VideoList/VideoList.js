import './VideoList.scss';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard.js';

function VideoList(props) {
    return (
        <>
            <div className="NextVideoList__container">
                <span className="NextVideoList__title subheader">NEXT VIDEOS</span>
                <section className="NextVideoList__VideoList">{
                    props.AllVideosInfo.map((VideoCard_info, index) => (
                        <Link to={`/videos/${VideoCard_info.id}`} className="NextVideoList__VideoCardLink">
                            <VideoCard index={index} VideoCard_info={VideoCard_info} AllVideosInfo={props.AllVideosInfo} currentVideoId={props.currentVideoId} UpdateCurrentVideoId={props.UpdateCurrentVideoId}/>
                        </Link>
                    ))}
                </section>
            </div>
        </>
    );
}

export default VideoList;