import './UploadVideo.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Publish_icon from '../../assets/icons/publish.svg';
// import UploadVideo_preview from '../../assets/images/Upload-video-preview.jpg';

function UploadVideo(props) {
    const [NewUploadVideo, setNewUploadVideo] = useState({
                                                        id: null,
                                                        title: null,
                                                        channel: "Hello World",
                                                        image: "https://i.imgur.com/i6S8m7I.jpg",
                                                        description: null,
                                                        views: "29,984",
                                                        likes: "2,552",
                                                        duration:"5:58",
                                                        video: "https://project-2-api.herokuapp.com/stream",
                                                        timestamp: 1631892222000,
                                                        comments: []
                                                      });
    const [ClickSubmit, setClickSubmit] = useState(false);
    let allvideoinfo = [...props.AllVideosInfo];

    useEffect(() => {
      if (ClickSubmit === true) {
        axios.post('https://howard-brainflix-api.herokuapp.com/videos', NewUploadVideo)
        .then(res => {
          console.log(res);
          allvideoinfo.push(NewUploadVideo);
          props.setAllVideosInfo(allvideoinfo);
          setClickSubmit(false);
          props.setRequiredVideoLoading(true);
        })
        .catch(err => console.log(err));
      }

    }, [ClickSubmit])
    
    const click_submit_button = (event) => {
      let form = document.querySelector("#UploadVideoForm__form");
      event.preventDefault();
      /* get name from the Form */
      let submit_title = document.getElementById("UploadVideoForm__video--input").value;
      /* get comment from the Form */
      let submit_description = document.getElementById("UploadVideoForm__video--textarea").value;
      if (submit_title !== "" && submit_description !== "") {
        let newvideo_title = document.getElementById("UploadVideoForm__video--input").value;
        let newvideo_description = document.getElementById("UploadVideoForm__video--textarea").value;
        let newvideo_title_section = document.getElementById("UploadVideoForm__video--input");
        let newvideo_description_section = document.getElementById("UploadVideoForm__video--textarea");
        newvideo_title_section.classList.remove("inputredborder");
        newvideo_description_section.classList.remove("inputredborder");

        let newuploadvideoobj = {...NewUploadVideo, id:uuidv4() , title:newvideo_title, description:newvideo_description, timestamp:Date.now()};
        console.log(newuploadvideoobj);
        setNewUploadVideo(newuploadvideoobj);
        setClickSubmit(true);
        form.reset();
      }
      else {
        if (submit_title === "" && submit_description !== "") {
          let newvideo_title_section = document.getElementById("UploadVideoForm__video--input");
          let newvideo_description_section = document.getElementById("UploadVideoForm__video--textarea");
          newvideo_title_section.classList.add("inputredborder");
          newvideo_description_section.classList.remove("inputredborder");
        }
        else if (submit_title !== "" && submit_description === "") {
          let newvideo_title_section = document.getElementById("UploadVideoForm__video--input");
          let newvideo_description_section = document.getElementById("UploadVideoForm__video--textarea");
          newvideo_title_section.classList.remove("inputredborder");
          newvideo_description_section.classList.add("inputredborder");
        }
        else if (submit_title === "" && submit_description === "") {
          let newvideo_title_section = document.getElementById("UploadVideoForm__video--input");
          let newvideo_description_section = document.getElementById("UploadVideoForm__video--textarea");
          newvideo_title_section.classList.add("inputredborder");
          newvideo_description_section.classList.add("inputredborder");
        }          
      }
    }

    const click_cancel_button = (event) => {
      let form = document.querySelector("#UploadVideoForm__form");
      event.preventDefault();
      let newvideo_title_section = document.getElementById("UploadVideoForm__video--input");
      let newvideo_description_section = document.getElementById("UploadVideoForm__video--textarea");
      newvideo_title_section.classList.remove("inputredborder");
      newvideo_description_section.classList.remove("inputredborder");
      form.reset();
    }


    

    return (
      <>
        <div className="UploadVideoForm">
          <span className="UploadVideoForm__title sectionheader">Upload Video</span>

          <div className="UploadVideoForm__content">
            <div className="UploadVideoForm__thumbnail">
                <span className="UploadVideoForm__thumbnail--title subheader">VIDEO THUMBNAIL</span>
                <img src="https://howard-brainflix-api.herokuapp.com/assets/image8.jpeg" className="UploadVideoForm__thumbnail--img"/>
            </div>
            <form className="UploadVideoForm__form" id="UploadVideoForm__form">
                <div className="UploadVideoForm__videotitle">
                    <label className="UploadVideoForm__video--title subheader">TITLE YOUR VIDEO</label>
                    <input className="UploadVideoForm__video--input" placeholder="Add a title to your video" id="UploadVideoForm__video--input"/>
                </div>

                <div className="UploadVideoForm__videodescription">
                    <label className="UploadVideoForm__video--description subheader">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="UploadVideoForm__video--textarea" placeholder="Add a description to your video" id="UploadVideoForm__video--textarea"/>
                </div>
            </form>
          </div>
          <div className="UploadVideoForm__videobutton">
            <div className="UploadVideoForm__publishbutton" id="UploadVideoForm__publishbutton" onClick={click_submit_button}>
              <div className="UploadVideoForm__video--publishbutton">
                  <img src={Publish_icon} alt="Publish Icon" className="UploadVideoForm__publishbutton--icon"/>
                  <span className="UploadVideoForm__publishbutton--placeholder">PUBLISH</span>
              </div>
            </div>
            <div className="UploadVideoForm__cancelbutton" id="UploadVideoForm__cancelbutton" onClick={click_cancel_button}>
              <div className="UploadVideoForm__video--cancelbutton">
                  <span className="UploadVideoForm__cancelbutton--placeholder">CANCEL</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
export default UploadVideo;
