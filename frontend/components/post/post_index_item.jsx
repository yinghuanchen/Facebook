import React from 'react';  
import CommentIndexContainer from './../comment/comment_index_container'; 
class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchAllComments(this.props.post.id); 
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.post.commentIds != prevProps.post.commentIds) {
    //         this.props.fetchPost(this.props.post.id); 
    //     }
    // }

    render () {
        const { post, currentUser} = this.props;
        const isCommentable = currentUser.id === post.wallId || currentUser.id.friendIds.includes(post.wallId) ? true:false;
        return (
            <div className="post-index-item-container"> 
                <div className="post-index-item-body">
                    <div className="post-index-item-author-information">
                        <div className="post-index-item-author-img-container">
                            <img className="post-index-item-author-img" 
                                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt="" id="img" className="img"/>
                        </div>
                        <div className="post-index-item-author-name">
                            <span>{this.props.post.author.username}</span>
                        </div>  
                    </div>
                    <div className="post-index-item-body-text">
                        <p>{this.props.post.body}</p>
                    </div> 
                </div>
                <div className="post-index-item-middle-bar">
                    <button className="post-index-item-btn">
                        <i className="far fa-thumbs-up fa-2x"></i>
                        <span>Like</span>
                    </button>
                    <button className="post-index-item-btn">
                        <i className="far fa-comment-alt fa-2x"></i>
                        <span>Comment</span>
                    </button>
                </div>  
                <div className="post-index-item-comment-index">

                </div>
                {/* <CommentIndexContainer post={this.props.post}/> */}
                <CommentCreateForm isCommentable={isCommentable} postId={post.id} 
                    createComment={this.props.createComment}
                    fetchPost={this.props.fetchPost}/>
            </div>
        )
       
    }
}


export default PostIndex;