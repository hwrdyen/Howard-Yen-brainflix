import './VideoCard.scss';

function VideoCard(props) {
    const ChangeCurrentVideo = (event) => {
        for (let i = 0; i < props.AllVideosInfo.length; i++) {
            if (props.AllVideosInfo[i].id === event.currentTarget.id) {
                //update the VideoPlayer Id
                props.UpdateCurrentVideoId(event.currentTarget.id);
            }
        }
    }
    
    return (
        <>
            <div className={`VideoCard ${props.currentVideoId === props.VideoCard_info.id ? 'CurrentPlayingVideo' : 'NotPlayingVideo'}`} id={props.VideoCard_info.id} onClick={ChangeCurrentVideo}>
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