import './VideoList.scss';
import {useState} from 'react';
import NextVideo_details from '../../data/videos.json';
import VideoCard from '../VideoCard/VideoCard.js';

function VideoList(props) {
    const [NextVideoDeatils, setNextVideoDetails] = useState(NextVideo_details);
    
    const ChangeVideo = (event) => {
        event.preventDefault();
        console.log(event.currentTarget.id);
        for (let i = 0; i < props.VideoDetails.length; i++) {
            if (props.VideoDetails[i].id === event.currentTarget.id) {
                //console.log(i);

                //update the VideoPlayer index
                props.updateCurrentVideoIndex(i);
            }
        }
        //setCurrentVideo(newVideoIndex);
    }
    
    return (
        <>  
            <div className="NextVideoList__container">
                <span className="NextVideoList__title">NEXT VIDEOS</span>
                <section className="NextVideoList__VideoList">{
                    NextVideoDeatils.map((video) => (
                        <VideoCard CurrentVideoID = {props.VideoDetails[props.CurrentVideoIndex].id} ChangeVideo={ChangeVideo} VideoCard_info={video} />
                        ))
                    }
                </section>
            </div>


        </>
    );
}

export default VideoList;