import React from 'react';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            requestSend: this.props.requestSend,
        }
        this.handleSendFriendRequest = this.handleSendFriendRequest.bind(this);
        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
    }

   
    handleSendFriendRequest(e) {
        e.preventDefault(); 
        this.props.sendFriendRequest(this.props.requesteeId);  
        this.setState({ requestSend: !this.state.requestSend });
    }

    handleDeleteFriendRequest(e) {
        e.preventDefault(); 
        this.props.deleteFriendRequest(this.props.currentUser.id, this.props.requesteeId); 
        this.setState({ requestSend: !this.state.requestSend });
    }

    componentDidUpdate(prevProps) {
        if (this.props.requesteeId !== prevProps.requesteeId) {
            this.props.fetchUser(this.props.requesteeId);
            const requestSend = this.props.currentUser.requesteeIds.includes(this.props.requesteeId);
            this.setState({ requestSend });
        }
    }

    render() {
        const { currentUser, requesteeId } = this.props;
        const btn = this.state.requestSend ? (
            <div className="dropdown friend-dropdown">
                <button className="dropbtn friend-button"><i className="fas fa-share-square"></i>&nbsp;Friend Request Sent</button>
                <div className="dropdown-content friend-drop-down-content">
                    <button className="friend-drop-down-a" onClick={this.handleDeleteFriendRequest}>Delete Friend Request</button >
                </div>
            </div>

        ) : 
            (
            <button className="friend-button" onClick={this.handleSendFriendRequest}><i className="fas fa-user-plus">
            </i>&nbsp;Add Friend</button >
        );
        if (currentUser.friendIds.includes(requesteeId) || currentUser.requesterIds.includes(requesteeId)) {
            return null; 
        } else {
            return (
               <>
                {btn}
               </>
            )
        }
    }
}

export default FriendRequest; 