import React from 'react';
import {Link} from 'react-router-dom';

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
                        <div className=" comment-index-item-img-container">
                            <Link to={{ pathname: `/users/${this.props.authorId}` }}>
                                <img className="post-index-item-author-img"
                                    src={this.props.authorProfilePic} alt="" id="img" className="img" />
                            </Link>
                        </div>
                        {deleteButton}
                    </div>
                    <div className="comment-index-item-body-text">
                        <div className="comment-index-item-author-name">
                            <Link to={{ pathname: `/users/${this.props.authorId}` }}>
                                <span>{this.props.authorName}</span>
                            </Link>          
                        </div>
                        <span className="comment-index-item-text">{this.props.comment.body}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;