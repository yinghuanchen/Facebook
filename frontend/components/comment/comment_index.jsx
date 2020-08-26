import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments(this.props.post.id); 
    }

    render() {
        if (!this.props.comments || !this.props.comments[0]) return null;
        return (
            <div className="post-index-container">
                <ul className="post-index-container-ul">
                    {this.props.comments.map((comment, idx) =>
                        <CommentIndexItem key={idx} comment={comment} 
                            authorName={this.props.authors[idx].username} authorProfilePic={this.props.authors[idx].profilePicture} />
                    )}
                </ul> 
            </div>
        )
    }
}

export default CommentIndex;