import './VideoCard.scss';

function VideoCard(props) {
    return (
        <>
            <div className={`VideoCard ${props.currentVideoId === props.VideoCard_info.id ? 'CurrentPlayingVideo' : 'NotPlayingVideo'}`} id={props.VideoCard_info.id}>
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