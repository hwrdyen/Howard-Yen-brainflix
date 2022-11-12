import './VideoCard.scss';
import {useState} from 'react';

function VideoCard(props) {
    //console.log(props.VideoCard_info.image);
    return (
        <>  
            <div className={`VideoCard ${props.CurrentVideoID === props.VideoCard_info.id ? 'CurrentPlayingVideo' : 'NotPlayingVideo'}`} id={props.VideoCard_info.id} onClick={props.ChangeVideo}>
                {/*<h3 className="VideoCard--id">{props.video_id}</h3>*/}
                <img className="VideoCard--img" src={props.VideoCard_info.image} alt="Video Img"/>
                <div className="VideoCard--info">
                    <span className="VideoCard__info--title">{props.VideoCard_info.title}</span>
                    <span className="VideoCard__info--content">{props.VideoCard_info.channel}</span>
                </div>
            </div>
        </>
    );
}

export default VideoCard;