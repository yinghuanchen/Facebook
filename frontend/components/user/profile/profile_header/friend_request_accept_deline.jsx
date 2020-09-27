import React from 'react';

class FriendRequestAcceptDecline extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddFriendship = this.handleAddFriendship.bind(this);
        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
    }

    handleAddFriendship(e) {
        e.preventDefault();
        const { currentUser, requesterId } = this.props;
        const friendship = { user_first_id: currentUser.id, user_second_id: requesterId };
        this.props.addFriendship(friendship);
    }

    handleDeleteFriendRequest(e) {
        e.preventDefault();
        const { currentUser, requesterId } = this.props;
        this.props.deleteFriendRequest(requesterId, currentUser.id);
    }
    

    render() {
        const { currentUser, requesterId } = this.props;
        if (currentUser.requesterIds.includes(requesterId)) {
            return (
                <div className="dropdown friend-dropdown">
                    <button className="dropbtn friend-button"><i className="fas fa-user-plus"></i>&nbsp;Respond to Friend Request</button>
                    <div className="dropdown-content friend-drop-down-content">
                        <button className="friend-drop-down-a" onClick={this.handleAddFriendship}>Confirm</button >
                        <br/>
                        <button className="friend-drop-down-a" onClick={this.handleDeleteFriendRequest}>Delete</button >
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default FriendRequestAcceptDecline; 