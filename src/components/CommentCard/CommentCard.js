import './CommentCard.scss';

function CommentCard(props) {
    return (
        <>
            <div className="CommentCard__container">
                <img className="CommentCard__profileimg" />
                <div className="CommentCard__content">
                    <div className="CommentCard__content--title">
                        <span className="CommentCard__content--name">{props.CommentCardInfo.name}</span>
                        <span className="CommentCard__content--date">
                            {props.CommentCardInfo.timestamp}
                        </span>
                    </div>
                    <span className="CommentCard__content--content bodycopy">{props.CommentCardInfo.comment}</span>
                </div>
            </div>
        </>
    );
}

export default CommentCard;