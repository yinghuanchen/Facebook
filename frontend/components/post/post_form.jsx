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
        this.props.fetchUser(this.props.match.params.userId); 
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
        this.props.action({ body: this.state.body, wall_id: this.state.wallId}).then(()=> {
            this.setState({ isModalOpen: false });
            this.props.fetchUser(this.props.wall.id); 
        }); 
    }

    render() {  
        if(!this.props.currentUser || !this.props.wall) return null; 
        const { wallType, postType, currentUser } = this.props; 
        if (wallType == 'wall' && currentUser.id !== this.props.wall.id  && !currentUser.friendIds.includes(this.props.wall.id)) return null;
        const placeholderText = postType == 'create' ? `What's on your mind, ${this.props.currentUser.username}?` : "Say something about this post..."
        
        const isModalOpen = this.state.isModalOpen;
        const modal = isModalOpen ? (
            <Modal open={isModalOpen} onClose={this.onCloseModal} classNames={{
                overlay: 'react-responsive-modal-overlay',
                modal: 'react-responsive-modal-modal post-form-moal',
                modalCenter: 'react-responsive-modal-modalCenter',
                closeButton: 'react-responsive-modal-closeButton post-form-modal-btn',
            }}>
                <form className="post-form" onSubmit={this.handleSubmit}> 
                    <textarea className="post-form-text" placeholder={placeholderText} onChange={this.handleUpdate}/>
                    {/* <input className="post-form-submit-btn" type="button" value="Post"/> */}
                    <button className="post-form-submit-btn">Post</button>
                </form>               
            </Modal>
        ) : null; 
        return (
            <div className="post-form-container">
                <div className="post-form-holder">
                    <input type="text" className="post-form-text" placeholder={placeholderText} onClick={this.onOpenModal} />
                    {modal}
                </div>
            </div>
            
        )

    }


}

export default PostForm; 