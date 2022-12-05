import './UploadVideo.scss';

import Publish_icon from '../../assets/icons/publish.svg';
import UploadVideo_preview from '../../assets/images/Upload-video-preview.jpg';

function UploadVideo() {
    return (
      <>
        <div className="UploadVideoForm">
          <span className="UploadVideoForm__title sectionheader">Upload Video</span>

          <div className="UploadVideoForm__content">
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
          </div>
          <div className="UploadVideoForm__videobutton">
            <a className="UploadVideoForm__publishbutton" href="#">
              <div className="UploadVideoForm__video--publishbutton">
                  <img src={Publish_icon} alt="Publish Icon" className="UploadVideoForm__publishbutton--icon"/>
                  <span className="UploadVideoForm__publishbutton--placeholder">PUBLISH</span>
              </div>
            </a>
            <a className="UploadVideoForm__cancelbutton" href="#">
              <div className="UploadVideoForm__video--cancelbutton">
                  <span className="UploadVideoForm__cancelbutton--placeholder">CANCEL</span>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
export default UploadVideo;
