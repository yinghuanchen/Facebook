import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props); 
        this.handleDelete = this.handleDelete.bind(this); 
    }

    handleDelete(e) {
       e.preventDefault(); 
       this.props.deleteComment(this.props.comment.id).then(() => this.props.fetchPost(this.props.postId));
    }

    render() {
        const deleteButton = this.props.isEditable ? 
         (<button className="delete-comment-btn" onClick={this.handleDelete}><i className="fas fa-times"></i></button>) : null;
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
                        {deleteButton}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;