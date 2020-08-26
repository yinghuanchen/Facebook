import React from 'react';  
import CommentIndexContainer from './../comment/comment_index_container'; 
import CommentCreateForm from './../comment/comment_create_form';
class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        const like = this.props.post.likerIds.includes(this.props.currentUser.id) ? true : false;
        this.state = {like}; 
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this); 
    }
    componentDidMount() {
        //this.props.fetchPost(this.props.post.id);
        this.props.fetchAllComments(this.props.post.id); 
    }
    handleDelete(e) {
        e.preventDefault();  
        this.props.deletePost(this.props.post.id);
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
        // debugger
        // const { post, currentUser} = this.props;
        if (!this.props.currentUser || !this.props.post) return null;
        const isCommentable = this.props.currentUser.id === this.props.post.wallId || this.props.currentUser.friendIds.includes(this.props.post.wallId) ? true:false;
        const likeClass = this.state.like ? "fas fa-thumbs-up fa-2x like" : "far fa-thumbs-up fa-2x"; 
        const likeFontClass = this.state.like ? "like" : "";
        const likeCount = this.props.post.likerIds.length; 
        const likedCountUnit = likeCount < 2 ? "like": "likes";
        const deleteButton = this.props.isDeletable ? (<button className="delete-post-btn" onClick={this.handleDelete}><i className="fas fa-times fa-lg"></i></button>) : null;
        return (
            <div className="post-index-item-container"> 
                <div className="post-index-item-body">
                    <div className="post-index-item-author-information">
                        <div className="post-index-item-author-img-container">
                            <img className="post-index-item-author-img" 
                                src={this.props.authorProfilePic} alt="" id="img" className="img"/>
                        </div>
                        <div className="post-index-item-author-name">
                            <span>{this.props.authorName}</span>
                        </div>  
                        {deleteButton}
                    </div>
                    <div className="post-index-item-body-text">
                        <p>{this.props.post.body}</p>
                    </div> 
                    <span className="like-count">{`${likeCount} ${likedCountUnit}`}</span>
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
                <CommentIndexContainer post={this.props.post}/>
                <CommentCreateForm isCommentable={isCommentable} postId={this.props.post.id} 
                    createComment={this.props.createComment}
                    fetchPost={this.props.fetchPost}/>
            </div>
        )
       
    }
}


export default PostIndex;