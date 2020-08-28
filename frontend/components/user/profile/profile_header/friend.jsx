import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteFriendship = this.handleDeleteFriendship.bind(this);
    }

    handleDeleteFriendship(e) {
        e.preventDefault();
        const { currentUser, friendId } = this.props;
        const friendship = { user_first_id: currentUser.id, user_second_id: friendId };
        this.props.deleteFriendship(friendship);
       
    }

    render() {
        const { currentUser, friendId } = this.props;

        if (currentUser.friendIds.includes(friendId)) {
          return (
              <div className="dropdown friend-dropdown">
                  <button className="dropbtn friend-button"><i className="fas fa-user-friends"></i>&nbsp;Friend</button>
                  <div className="dropdown-content friend-drop-down-content">
                      <button className="friend-drop-down-a" onClick={this.handleDeleteFriendship}>Unfriend</button >
                  </div>
              </div>
          )
            
        } else {
           return null; 
        }
    }
}

export default Friend; 