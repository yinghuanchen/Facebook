import React from 'react';
import {Modal} from 'react-responsive-modal'; 

class PostForm extends React.Component {
    constructor(props) {
        super(props); 
        const wallId = this.props.wall ? this.props.wall.id : null; 
        this.state = { body: '', wallId: wallId, isModalOpen: false };
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.match.params.userId) this.props.fetchUser(this.props.match.params.userId); 
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.wall !== prevProps.wall) {
            this.setState({ wallId: this.props.wall.id }); 
        }
    }

    onOpenModal() {
        this.setState({ isModalOpen: true });
    };

    onCloseModal() {
        this.setState({ isModalOpen: false });
    };

    handleUpdate(e) {
        this.setState({
            body: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();  
        if (this.state.body) {
            this.props.action({ body: this.state.body, wall_id: this.state.wallId }).then(() => {
                this.setState({ isModalOpen: false });
                this.props.fetchUser(this.props.wall.id);
            }); 
        }
      
    }

    render() {  
        if(!this.props.currentUser || !this.props.wall) return null; 
        const { wallType, postType, currentUser } = this.props; 
        if (wallType == 'wall' && currentUser.id !== this.props.wall.id  && !currentUser.friendIds.includes(this.props.wall.id)) return null;
        const placeholderText = currentUser.id === this.props.wall.id ? `What's on your mind, ${this.props.currentUser.username}?` : `Write Something to ${this.props.wall.username}...`
        
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
                            <textarea className="post-form-text" placeholder={placeholderText} onChange={this.handleUpdate} />
                        </div>
                    </div>
                    {/* <span className="floating-label">{placeholderText}</span> */}
                    {/* <input className="post-form-submit-btn" type="button" value="Post"/> */}
                    <button className="post-form-submit-btn">Post</button>
                </form>               
            </Modal>
        ) : null; 
        return (
            <div className="post-form-container">
                <span><i className="fas fa-pencil-alt fa-lg"></i> Create Post
                <i className="fas fa-camera fa-lg"></i> Photo/Video
                 <i className="fas fa-video fa-lg"></i> Live Video
                </span>
                <div className="post-form-holder">
                    <div className="post-form-img-container">
                        <img className="post-form-img"
                            src={this.props.currentUser.profilePicture} alt="" id="img" className="img" />
                        <textarea className="post-form-text" placeholder={placeholderText} onClick={this.onOpenModal} />
                        {/* <span className="floating-label">{placeholderText}</span> */}

                    </div>    
                </div>
                {modal}
            </div>
            
        )

    }


}

export default PostForm; 