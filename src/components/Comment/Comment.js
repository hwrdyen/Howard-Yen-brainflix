import './Comment.scss';
import {useState} from 'react';
import User_img from '../../assets/images/Mohan-muruge.jpg';
import AddComment_icon from '../../assets/icons/add_comment.svg';
import CommentCard from '../CommentCard/CommentCard.js';

function Comment(props) {
    const [NewComment, setNewComment] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        if (NewComment === '') {
          alert('Enter task goal text please');
          return;
        }

        console.log(NewComment);
    
        props.AddNewCommenttoDatabase(NewComment);
    
        setNewComment('');
      };
    
      const handleFormInput = (event) => {
        //console.log(event.target.value)
        setNewComment(event.target.value);
      };

    return (
        <>
            <section className="Comment__container">
                {/* Total Comment Count - Before Form*/}
                <span className="Comment__count">{props.comment_list.length} Comments</span>

                {/* Comment Form */}
                <div className="Comment__submitform">
                    <img className="Comment__profileimg" src={User_img} alt="mohan_profile_picture" />
                    <form className="Comment__form" id="Comment__form" onSubmit={handleFormSubmit}>
                        <label className="Comment__title--comment subheader">JOIN THE CONVERSATION</label>
                        <div className="Comment__form--input">
                            <textarea 
                            type="text"
                            id="commentsubmit__comment" 
                            name="comment_comment" 
                            placeholder="Add a new comment" 
                            className="Comment__input--comment" 
                            value= {NewComment} 
                            onChange = {handleFormInput} 
                            required ></textarea>

                            <button id="commentsubmit__button" className="Comment__button">
                                <img className="Comment__button--icon" src={AddComment_icon} alt="Add Comment Icon"/>
                                <span className="Comment__button--placeholder">COMMENT</span>
                            </button>
                        </div>

                    </form>
                </div>
            </section>

            {/* Comment Card */}
            <section className="CommentCard_list">{
            props.comment_list.map((card) => (
                <CommentCard comment_name = {card.name} comment_date = {card.timestamp} comment_content = {card.comment}/>
                ))
            }
            </section>


        </>
    );
}

export default Comment;