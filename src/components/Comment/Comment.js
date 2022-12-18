import './Comment.scss';

import CommentCard from '../CommentCard/CommentCard.js';

import User_img from '../../assets/images/Mohan-muruge.jpg';
import AddComment_icon from '../../assets/icons/add_comment.svg';

function Comment(props) {

    const click_comment_button = (event) => {
        event.preventDefault();
        let submit_comment = document.getElementById("commentsubmit__comment").value;
        if (submit_comment === "") {
            let video_comment_input = document.getElementById("commentsubmit__comment");
            video_comment_input.classList.add("inputredborder");
        }

        else {
            let video_comment_input = document.getElementById("commentsubmit__comment");
            video_comment_input.classList.remove("inputredborder");
        }
    }

    return (
        <>
            <section className="Comment__container">
                {/* Total Comment Count - Before Form*/}
                <span className="Comment__count">{props.Comment_List.length} Comments</span>

                {/* Comment Form */}
                <div className="Comment__submitform">
                    <img className="Comment__profileimg" src={User_img} alt="mohan_profile_picture" />
                    <form className="Comment__form" id="Comment__form">
                        <label className="Comment__title--comment subheader">JOIN THE CONVERSATION</label>
                        <div className="Comment__form--input">
                            <textarea 
                            type="text"
                            id="commentsubmit__comment" 
                            name="comment_comment" 
                            placeholder="Add a new comment" 
                            className="Comment__input--comment" 
                            // value= {NewComment} 
                            // onChange = {handleFormInput} 
                            required ></textarea>

                            <button id="commentsubmit__button" className="Comment__button" onClick={click_comment_button}>
                                <img className="Comment__button--icon" src={AddComment_icon} alt="Add Comment Icon"/>
                                <span className="Comment__button--placeholder">COMMENT</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Comment Card */}
            <section className="CommentCard_list">{
            props.Comment_List.map((card) => (
                <CommentCard CommentCardInfo = {card} />
                ))
            }
            </section>
        </>
    );
}

export default Comment;