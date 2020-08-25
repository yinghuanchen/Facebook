import React from 'react';
import {Modal} from 'react-responsive-modal';
class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { profileImg: null, profileImgURL: null, isModalOpen: false }
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
        this.handleProfileFile = this.handleProfileFile.bind(this);

    }

    onOpenModal() {
        this.setState({ isModalOpen: true });
    };

    onCloseModal() {
        this.setState({ isModalOpen: false });
    };

    handleProfileFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ profileImg: file, profileImgURL: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleProfileSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.profileImg) {
            formData.append('user[profile_picture]', this.state.profileImg);
            this.props.updateUserPhoto(this.props.user.id, formData);
        }
        this.setState({ isModalOpen: false });
    }



    render() {

        const editButton = this.props.isEditable ? (
            <div class='edit-profile-picture-btn' >
                <input type="file" accept="image/*" id="input" onChange={this.handleProfileFile} />
                <div className="profile-img-input-label">
                    <label className="image-upload-label" htmlFor="input">
                        <i class="fas fa-camera fa-lg"></i>
                        <div className="image-upload-label-text">&nbsp;Update</div>
                    </label>
                </div> 
            </div>
        ) : null;
        const isModalOpen = this.state.isModalOpen;
        const modal = isModalOpen ? (
            <Modal open={isModalOpen} onClose={this.onCloseModal} classNames={{
                overlay: 'react-responsive-modal-overlay',
                modal: 'react-responsive-modal-modal profile-picture-modal',
                modalCenter: 'react-responsive-modal-modalCenter profile-picture-modal-center',
                closeButton: 'react-responsive-modal-closeButton profile-picture-modal-btn',
            }}>
                <div className="profile-picture-preview">
                    <img src={this.state.profileImgURL} alt="" id="img" className="img" />
                    <button className="profile-img-upload-btn" onClick={this.handleProfileSubmit}>
                        <i class="fas fa-camera fa-2x">&nbsp;Submit Pofile Picture</i>
                    </button>

                </div>
            </Modal>
        ) : null; 
        const profilePic = this.props.user.profilePicture ? 
            (
                <img src={this.props.user.profilePicture} alt="" id="img" className="img" />
            ) : (
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt="" id="img" className="img" />
            );
                
        // debugger 
        return (
                <div className="profile-picture">
                    {editButton}
                    <div className="profile-picture-container">
                        <div className="profile-picture-holder">
                            {profilePic}
                        </div>
                    </div>
                    {modal} 
                </div>
        )

    }
}

export default ProfilePhoto; 