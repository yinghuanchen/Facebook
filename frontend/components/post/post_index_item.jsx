import React, { useRef } from 'react';  
import CommentIndexContainer from './../comment/comment_index_container'; 
import CommentCreateForm from './../comment/comment_create_form';
import { Link, NavLink} from 'react-router-dom';
import {Modal} from 'react-responsive-modal';
import SearchResultItem from '../search_result/search_result_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        const like = this.props.post.likerIds.includes(this.props.currentUser.id) ? true : false;
        this.post = Object.assign({},this.props.post); 
        this.state = { like: like, isModalOpen: false, body: this.props.post.body, isLikerShown: false }; 
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this); 
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.showLiker = this.showLiker.bind(this);
        this.hideLiker = this.hideLiker.bind(this);
    }

    componentDidMount() {
        //this.props.fetchPost(this.props.post.id);
        this.props.fetchAllComments(this.props.post.id); 
    }

    onOpenModal() {
        this.setState({ isModalOpen: true });
    };

    onCloseModal() {
        this.setState({ isModalOpen: false });
        this.setState({
          body: this.post.body, 
        });
    };

    showLiker() {
        this.setState({ isLikerShown: true });
    }

    hideLiker() {
        this.setState({ isLikerShown: false });
    }

    handleDelete(e) {
        e.preventDefault();  
        this.props.deletePost(this.props.post.id);
    }

    handleUpdate(e) {
        this.setState({
            body: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body) {
            this.post.body = this.state.body;
            this.props.updatePost(this.post).then(() => {
                this.setState({ isModalOpen: false });
                //this.props.fetchUser(this.props.wall.id);
                this.props.fetchPost(this.post.id);
            });
        }
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
        // const { post, currentUser} = this.props;
        if (!this.props.currentUser || !this.props.post) return null;
        const isCommentable = this.props.currentUser.id === this.props.post.wallId || this.props.currentUser.friendIds.includes(this.props.post.wallId) ? true:false;
        const likeClass = this.state.like ? "fas fa-thumbs-up fa-2x like" : "far fa-thumbs-up fa-2x"; 
        const likeFontClass = this.state.like ? "like" : "";
        const likeCount = this.props.post.likerIds.length; 
        const likedCountUnit = likeCount < 2 ? "like": "likes";
        let editdeleteButton; 
        if (this.props.isEditable){
            editdeleteButton = (<div className="dropdown friend-dropdown post-dropdown">
                <button className="delete-post-btn"><i className="fas fa-ellipsis-h fa-lg"></i></button>
                <div className="dropdown-content post-dropdown-content">
                    <button className="post-dropdown-a" onClick={this.onOpenModal}><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit Post</button >
                    <br />
                    <button className="post-dropdown-a" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i>&nbsp;&nbsp;Delete Post</button >
                </div>
            </div>)
        } else if (this.props.isDeletable) {
            editdeleteButton = (<div className="dropdown friend-dropdown post-dropdown">
                <button className="delete-post-btn"><i className="fas fa-ellipsis-h fa-lg"></i></button>
                <div className="dropdown-content post-dropdown-content">
                    <button className="post-dropdown-a" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i>&nbsp;&nbsp;Delete Post</button >
                </div>
            </div>)
        } else {
            editdeleteButton = (<button className="delete-post-btn other-btn"><i className="fas fa-ellipsis-h fa-lg"></i></button>);
        }
        

        const wallInformation = this.props.wall.id === this.props.author.id ? (null) : (
            <div className="post-index-item-author-information post-index-item-wall-information">
                <i className="fas fa-caret-right"></i>
                <div className="post-index-item-author-img-container">
                    <img className="post-index-item-author-img"
                        src={this.props.wall.profilePicture} alt="" id="img" className="img" />
                </div>
                <div className="post-index-item-author-name">
                    {/* <span>{this.props.wall.username}</span> */}
                    <Link to={`/users/${this.props.wall.id}`}><span>{this.props.wall.username}</span></Link>
                </div>  
            </div>  
        ); 

        const isModalOpen = this.state.isModalOpen;
        const modal = isModalOpen ? (
            <Modal open={isModalOpen} onClose={this.onCloseModal} classNames={{
                overlay: 'react-responsive-modal-overlay',
                modal: 'react-responsive-modal-modal post-form-modal',
                modalCenter: 'react-responsive-modal-modalCenter',
                closeButton: 'react-responsive-modal-closeButton post-form-modal-btn',
            }}>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <span><i className="fas fa-pencil-alt fa-lg"></i> Create Post
                    <i className="fas fa-camera fa-lg"></i> Photo/Video
                    <i className="fas fa-video fa-lg"></i> Live Video
                    </span>
                    <div className="post-form-body">
                        <div className="post-form-img-container">
                            <img className="post-form-img"
                                src={this.props.currentUser.profilePicture} alt="" id="img" className="img" />
                            <textarea className="post-form-text" value={this.state.body} onChange={this.handleUpdate} />
                        </div>
                    </div>
                    {/* <span className="floating-label">{placeholderText}</span> */}
                    {/* <input className="post-form-submit-btn" type="button" value="Post"/> */}
                    <button className="post-form-submit-btn">Save</button>
                </form>
            </Modal>
        ) : null;  

        const isLikerShown = this.state.isLikerShown;
        const likerModal = isLikerShown ? (
            <Modal open={isLikerShown} onClose={this.hideLiker} classNames={{
                overlay: 'react-responsive-modal-overlay',
                modal: 'react-responsive-modal-modal liker-modal',
                modalCenter: 'react-responsive-modal-modalCenter',
                closeButton: 'react-responsive-modal-closeButton liker-modal-btn',
            }}>
                <div className="likers-container">
                    <div className="liker-space"></div>
                    {this.props.likers.map((user, idx) =>
                        <li className="liker-item" key={idx}>
                            <div className="liker-item-img-container">
                                <Link to={`/users/${user.id}`}><img src={user.profilePicture} alt="" /></Link>
                            </div>
                            <Link className="friend-list-item-link search-result-item-link liker-link" to={`/users/${user.id}`} >{user.username}</Link>
                        </li>
                    )}
                </div>
            </Modal>
        ) : null;  

        return (
            <div className="post-index-item-container"> 
                <div className="post-index-item-body">
                    <div className="post-index-item-author-information">                   
                        <div className="post-index-item-author-img-container">
                            <Link to={{ pathname: `/users/${this.props.author.id}` }}><img className="post-index-item-author-img"
                                src={this.props.authorProfilePic} alt="" id="img" className="img" /></Link>
                            
                        </div>
                        <div className="post-index-item-author-name">
                            <Link to={{pathname:`/users/${this.props.author.id}`}}><span>{this.props.authorName}</span></Link>
                            {editdeleteButton} 
                        </div> 
                        {wallInformation}
                    </div>
                    <div className="post-index-item-body-text">
                        <div>{this.props.post.body}</div>
                    </div> 
                    <span className="like-count" onClick={this.showLiker}>{`${likeCount} ${likedCountUnit}`}</span>
                    {likerModal}
                </div>
                <div className="post-index-item-middle-bar">
                    <button className="post-index-item-btn" onClick={this.handleToggle}>
                        <i className={likeClass}></i>
                        <span className={likeFontClass}>Like</span>
                    </button>
                    <button className="post-index-item-btn" onClick={this.scrollToMyRef}>
                        <i className="far fa-comment-alt fa-2x"></i>
                        <span>Comment</span>
                    </button>
                </div>  
                {modal}
                <div className="post-index-item-comment-index">

                </div>
                <CommentIndexContainer post={this.props.post} />                
                <CommentCreateForm isCommentable={isCommentable} postId={this.props.post.id} 
                    createComment={this.props.createComment}
                    fetchPost={this.props.fetchPost} />
            </div>
        )
       
    }
}


export default PostIndex;