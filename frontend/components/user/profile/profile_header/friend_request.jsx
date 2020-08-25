import React from 'react';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            requestSend: this.props.requestSend,
        }
        this.handleToggle = this.handleToggle.bind(this); 
    }

    handleToggle(e) {
        e.preventDefault();  
        this.setState({ requestSend: !this.state.requestSend});
        let tmp = !this.state.requestSend;
        if (tmp) this.props.sendFriendRequest(this.props.requesteeId); 
        else this.props.deleteFriendRequest(this.props.currentUser.id,this.props.requesteeId); 
    }

    render() {
        const { currentUser, requesteeId } = this.props;
        const text = this.state.requestSend ? 'Friend Request Sent' : 'Add Friend';
        const icon = this.state.requestSend ? "fas fa-share-square" : "fas fa-user-plus";

        if (currentUser.friendIds.includes(requesteeId) || currentUser.requesterIds.includes(requesteeId)) {
            return null; 
        } else {
            return (
                <button className="friend-button" onClick={this.handleToggle}><i className={icon}></i>&nbsp;{text}</button>
            )
        }
    }
}

export default FriendRequest; 