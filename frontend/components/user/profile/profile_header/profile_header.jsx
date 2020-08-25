import React from 'react';
import FriendRequestContainer from './friend_request_container';
import FriendRequestAcceptDeclineContainer from './friend_request_accept_decline_container';
import FriendContainer from './friend_container';
import CoverPhoto from './cover_photo';
import ProfilePhoto from './profile_photo';
class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        if (!this.props.user || !this.props.currentUser) return null;
        // Check if the currentUser has already send friend request 
        let requestSend;
        if (this.props.currentUser.requesteeIds.includes(this.props.user.id)) requestSend = true;
        else requestSend = false;

        const button = this.props.currentUser.id === this.props.user.id ? null : (<div>
            <FriendContainer userId={this.props.user.id} />
            {/* when current user is requester and show page is requestee */}
            <FriendRequestContainer userId={this.props.user.id} requestSend={requestSend} />
            {/* when current user is requestee and show page is requester */}
            <FriendRequestAcceptDeclineContainer userId={this.props.user.id} />
        </div>);
        const isEditable = this.props.currentUser.id === this.props.user.id ? true : false;
       
        return (
            <div className="profile-header-page">
                <CoverPhoto user={this.props.user} isEditable={isEditable} updateUserPhoto={this.props.updateUserPhoto} />
                <ProfilePhoto user={this.props.user} isEditable={isEditable} updateUserPhoto={this.props.updateUserPhoto} />
                <div className="profile-username-holder">
                    <span>{this.props.user.username}</span>
                </div><div className="profile-header-page-ul-container">
                    <ul className="profile-header-page-ul clearfix">
                        <li>Timeline</li>
                        <li>About</li>
                        <li>Friends</li>
                    </ul>
                </div>
                
                {button}
            </div>
        )
    }
}

export default ProfileHeader;