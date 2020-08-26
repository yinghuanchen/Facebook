import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div className="comment-index-item">
                <div className="comment-index-item-body">
                    <div className="comment-index-item-author-information">
                        <div className="post-index-item-author-img-container">
                            <img className="post-index-item-author-img"
                                src={this.props.authorProfilePic} alt="" id="img" className="img" />
                        </div>
                    </div>
                    <div className="comment-index-item-body-text">
                        <div className="comment-index-item-author-name">
                            <span>{this.props.authorName}</span>
                        </div>
                        <p>{this.props.comment.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;