import React from 'react';
import FriendRequestContainer from './friend_request_container';
import FriendRequestAcceptDeclineContainer from './friend_request_accept_decline_container';
import FriendContainer from './friend_container';
import CoverPhoto from './cover_photo';
import ProfilePhoto from './profile_photo';
class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.showTimeLine = this.showTimeLine.bind(this);
        this.showAbout = this.showAbout.bind(this);
        this.showFriends = this.showFriends.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId ); 
            this.props.fetchUser(this.props.currentUser.id); 
        }
    }

    showTimeLine() {
        const timeLineContent = document.getElementsByClassName('user-profile-page-content')[0]; 
        timeLineContent.style.display = ""; 
        const about = document.getElementsByClassName('user-profile-information')[0];
        if (about) about.style.display = "none";
        const friends = document.getElementsByClassName('user-friends-information')[0];
        if (friends) friends.style.display = "none";
    }

    showAbout() {
        const timeLineContent = document.getElementsByClassName('user-profile-page-content')[0];
        if (timeLineContent) timeLineContent.style.display = "none"; 
        const about = document.getElementsByClassName('user-profile-information')[0]; 
        if(about) about.style.display = "inline-block";
        const friends = document.getElementsByClassName('user-friends-information')[0];
        if (friends) friends.style.display = "inline-block";
    }

    showFriends() {
        const timeLineContent = document.getElementsByClassName('user-profile-page-content')[0];
        if (timeLineContent) timeLineContent.style.display = "none"; 
        const about = document.getElementsByClassName('user-profile-information')[0];
        if (about) about.style.display = "none";
        const friends = document.getElementsByClassName('user-friends-information')[0];
        if (friends) friends.style.display = "inline-block";
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
        const ulClass = this.props.currentUser.id === this.props.user.id ? "author-profile-header" : "wall-profile-header"; 
        return (
            <div className="profile-header-page">
                <CoverPhoto user={this.props.user} isEditable={isEditable} updateUserPhoto={this.props.updateUserPhoto} />
                <ProfilePhoto user={this.props.user} isEditable={isEditable} updateUserPhoto={this.props.updateUserPhoto} />
                <div className="profile-username-holder">
                    <span>{this.props.user.username}</span>
                </div><div className={`profile-header-page-ul-container  ${ulClass}`}>
                    <ul className={`profile-header-page-ul clearfix`}>
                        <li onClick={this.showTimeLine}>Timeline</li>
                        <li onClick={this.showAbout}>About</li>
                        <li onClick={this.showFriends}>Friends</li>
                    </ul>
                </div>
                
                {button}
            </div>
        )
    }
}

export default ProfileHeader;