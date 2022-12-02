import './CommentCard.scss';

function CommentCard(props) {
    let CommentCardInfo_timestamp = props.CommentCardInfo.timestamp;
    function TimestampConverter(timestamp_input) {
        let timestamp = new Date(timestamp_input);
        let timestamp_year = timestamp.getFullYear();
        let timestamp_month = ("00" + (timestamp.getMonth() + 1)).slice(-2);
        let timestamp_date = ("00" + timestamp.getDate()).slice(-2);
        let date = (timestamp_month + "/" + timestamp_date + "/" + timestamp_year);
        return date;
    }
    let CommentCardInfo_datetime = TimestampConverter(CommentCardInfo_timestamp);
    
    return (
        <>
            <div className="CommentCard__container">
                <div className="CommentCard__profileimg"></div>
                <div className="CommentCard__content">
                    <div className="CommentCard__content--title">
                        <span className="CommentCard__content--name">{props.CommentCardInfo.name}</span>
                        <span className="CommentCard__content--date">
                            {CommentCardInfo_datetime}
                        </span>
                    </div>
                    <span className="CommentCard__content--content bodycopy">{props.CommentCardInfo.comment}</span>
                </div>
            </div>
        </>
    );
}

export default CommentCard;