import React from 'react'; 
import {Modal} from 'react-responsive-modal'; 
class CoverPhoto extends React.Component {
    constructor(props) {
        super(props); 
        const coverImgURL = this.props.user.coverPhoto ? this.props.user.coverPhoto : 'https://i.pinimg.com/originals/e1/c0/53/e1c053609dca3d22729aa385b03662a3.jpg'
        this.state = { coverImg: null, coverImgURL, isModalOpen: false  }
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    onOpenModal() {
        this.setState({ isModalOpen: true });
    };

    onCloseModal() {
        this.setState({ isModalOpen: false });
    };


    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ coverImg: file, coverImgURL: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
        this.setState({ isModalOpen: true });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.coverImg) {
            formData.append('user[cover_photo]', this.state.coverImg);
            this.props.updateUserPhoto(this.props.user.id, formData);
        }
        this.setState({ isModalOpen: false });
    }

    

    render() {
        
        const editButton = this.props.isEditable ? (
            <div className='edit-cover-photo-btn'>
                        <input type="file" accept="image/*" id="input" onChange={this.handleFile} />
                        <div className="img-input-label">
                            <label className="image-upload-label" htmlFor="input"> 
                                <i className="fas fa-camera fa-lg"></i> 
                                <div className="image-upload-label-text">&nbsp;Upload Cover Photo</div>
                            </label>
                        </div> 
            </div>  
        ) : null; 
        const isModalOpen = this.state.isModalOpen;
        const modal = isModalOpen ? (
            <Modal open={isModalOpen} onClose={this.onCloseModal} classNames={{
                overlay: 'react-responsive-modal-overlay',
                modal: 'react-responsive-modal-modal cover-form-modal',
                modalCenter: 'react-responsive-modal-modalCenter cover-form-modal-center',
                closeButton: 'react-responsive-modal-closeButton cover-form-modal-btn',
            }}>
                <div className="cover-photo-preview">
                    <img src={this.state.coverImgURL} alt="" id="img" className="img" />
                    <button className="img-upload-btn" onClick={this.handleSubmit}>
                        <i className="fas fa-camera fa-2x">&nbsp;Submit Cover Photo</i>
                    </button>    

                </div>
               
            </Modal>
        ) : null; 
        const coverPhoto = this.props.user.coverPhoto ?
            (
                <img src={this.props.user.coverPhoto} alt="" id="img" className="img" />
            ) : (
                <img src='https://frankjkenny.com/wp-content/uploads/2012/10/Facebook-Page-Cover.png' alt="" id="img" className="img" />
            );
        return (
            <div className="cover-photo">  
                {editButton}
                <div className="cover-photo-container">
                    <div className="cover-photo-holder">
                        {coverPhoto}
                        {/* <img src={this.state.coverImgURL} alt="" id="img" className="img" /> */}
                    </div>
                </div>
                {modal} 
            </div>
        )

    }
}

export default CoverPhoto; 