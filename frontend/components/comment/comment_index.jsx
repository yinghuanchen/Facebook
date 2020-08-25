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
        if (!this.props.comments) return null;
        return (
            <div className="post-index-container">
                {/* {this.props.comments.map((comment, idx) =>
                    <CommentIndexItem key={idx} comment={comment} />
                )} */}
            </div>
        )
    }
}

export default CommentIndex;