import React from 'react';  
import CommentIndexContainer from './../comment/comment_index_container'; 
import CommentCreateForm from './../comment/comment_create_form';
class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        const like = this.props.post.likerIds.includes(this.props.currentUser.id) ? true : false;
        this.state = {like}; 
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidMount() {
        //this.props.fetchPost(this.props.post.id);
        this.props.fetchAllComments(this.props.post.id); 
    }

    handleToggle(e) {
        e.preventDefault();  
        if (this.state.like) {
            this.props.deletelike({ post_id: this.props.post.id });
        }
        else this.props.createlike({ post_id: this.props.post.id });
        this.setState({like: !this.state.like}); 
        //this.fetchPost(this.post.id)
    }

    render () {
        const { post, currentUser} = this.props;
        const isCommentable = currentUser.id === post.wallId || currentUser.id.friendIds.includes(post.wallId) ? true:false;
        const likeClass = this.state.like ? "fas fa-thumbs-up fa-2x like" : "far fa-thumbs-up fa-2x"; 
        const likeFontClass = this.state.like ? "like" : ""; 
        return (
            <div className="post-index-item-container"> 
                <div className="post-index-item-body">
                    <div className="post-index-item-author-information">
                        <div className="post-index-item-author-img-container">
                            <img className="post-index-item-author-img" 
                                src={this.props.authorProfilePic} alt="" id="img" className="img"/>
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
                    <button className="post-index-item-btn" onClick={this.handleToggle}>
                        <i className={likeClass}></i>
                        <span className={likeFontClass}>Like</span>
                    </button>
                    <button className="post-index-item-btn">
                        <i className="far fa-comment-alt fa-2x"></i>
                        <span>Comment</span>
                    </button>
                </div>  
                <div className="post-index-item-comment-index">

                </div>
                <CommentIndexContainer post={post}/>
                <CommentCreateForm isCommentable={isCommentable} postId={post.id} 
                    createComment={this.props.createComment}
                    fetchPost={this.props.fetchPost}/>
            </div>
        )
       
    }
}


export default PostIndex;