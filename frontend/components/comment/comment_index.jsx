import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments(this.props.post.id); 
    }

    componentDidUpdate(prevProps) {
        if (this.props.post.commentIds.length !== prevProps.post.commentIds.length) {
            this.props.fetchAllComments(this.props.post.id); 
        }
    } 

    render() {
        if (!this.props.comments || !this.props.comments[0] || !this.props.authors) return null;
        return (
            <div className="post-index-container">
                <ul className="post-index-container-ul">
                    {this.props.comments.map((comment, idx) =>
                        <CommentIndexItem key={idx} comment={comment} 
                            authorId={this.props.authors[idx].id}
                            authorName={this.props.authors[idx].username} 
                            authorProfilePic={this.props.authors[idx].profilePicture} 
                            deleteComment={this.props.deleteComment} 
                            fetchPost={this.props.fetchPost} 
                            postId = {this.props.post.id}
                            isEditable={Boolean(this.props.currentUser.id === this.props.authors[idx].id)}
                            />
                    )}
                </ul> 
            </div>
        )
    }
}

export default CommentIndex;