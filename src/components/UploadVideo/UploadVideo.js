import './UploadVideo.scss';
import {Link} from 'react-router-dom';

import BrainFlix_logo from '../../assets/logos/BrainFlix-logo.svg';
import Upload_icon from '../../assets/icons/upload.svg';
import Publish_icon from '../../assets/icons/publish.svg';
import User_img from '../../assets/images/Mohan-muruge.jpg';
import UploadVideo_preview from '../../assets/images/Upload-video-preview.jpg';

function UploadVideo() {
    return(
        <>
            <div className="Header">
                <div className="Header__logo">
                    <Link to={`/`} className="Header__logo--link">
                        <img className= "Header__logo--img" src={BrainFlix_logo} alt="BrainFlix Logo"/>
                    </Link>
                </div>

                <div className="Header__navbar">
                    
                    <input type="text" className="Header__search--input" placeholder="Search"/>

                    <Link to={`/upload`} id="upload__button" className="Header__upload--button">
                        <img className="upload__section--icon" src={Upload_icon} alt="Upload Icon"/>
                        <span className="upload__section--placeholder">UPLOAD</span>
                    </Link>


                    <div className="Header__profileimg">
                        <img src={User_img} alt="User img" className="user__icon"/>
                    </div>
                </div>
            </div>

            <div className="UploadVideoForm">
                <span className="UploadVideoForm__title">Upload Video</span>
                <div className="UploadVideoForm__thumbnail">
                    <span className="UploadVideoForm__thumbnail--title subheader">VIDEO THUMBNAIL</span>
                    <img src={UploadVideo_preview} alt="Upload Video Preview img" className="UploadVideoForm__thumbnail--img"/>
                </div>
                <form className="UploadVideoForm__form">
                    <div className="UploadVideoForm__videotitle">
                        <label className="UploadVideoForm__video--title subheader">TITLE YOUR VIDEO</label>
                        <input className="UploadVideoForm__video--input" placeholder="Add a title to your video" />
                    </div>

                    <div className="UploadVideoForm__videodescription">
                        <label className="UploadVideoForm__video--description subheader">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="UploadVideoForm__video--textarea" placeholder="Add a description to your video"/>
                    </div>
                </form>
                <a className="UploadVideoForm__video--publishbutton">
                    <img src={Publish_icon} alt="Publish Icon" className="UploadVideoForm__publishbutton--icon"/>
                    <span className="UploadVideoForm__publishbutton--placeholder">PUBLISH</span>
                </a>
                <a className="UploadVideoForm__video--cancelbutton">
                    <span className="UploadVideoForm__cancelbutton--placeholder">CANCEL</span>
                </a>

            </div>
        </>
    );

}

export default UploadVideo;