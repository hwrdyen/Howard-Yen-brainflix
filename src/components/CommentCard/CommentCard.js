import './CommentCard.scss';
// import {useState} from 'react';

function CommentCard(props) {
    //console.log(props);

    // const [DateTime, setDateTime] = useState(props.comment_date);

    function TimestampConverter(timestamp_input) {
        let timestamp = new Date(timestamp_input);
        let timestamp_year = timestamp.getFullYear();
        let timestamp_month = ("00" + (timestamp.getMonth() + 1)).slice(-2);
        let timestamp_date = ("00" + timestamp.getDate()).slice(-2);
        let date = (timestamp_month + "/" + timestamp_date + "/" + timestamp_year);
        return date;
    }

    return (
        <>
            <div className="CommentCard__container">
                <img className="CommentCard__profileimg" />
                <div className="CommentCard__content">
                    <div className="CommentCard__content--title">
                        <span className="CommentCard__content--name">{props.comment_name}</span>
                        <span className="CommentCard__content--date">
                            {props.comment_date}
                        </span>
                    </div>
                    <span className="CommentCard__content--content bodycopy">{props.comment_content}</span>
                </div>

            </div>
        </>
    );
}

export default CommentCard;