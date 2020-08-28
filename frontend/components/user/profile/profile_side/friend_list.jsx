import React from 'react'; 
import {Link} from 'react-router-dom';
import FriendListItem from './friend_list_item';

class  FriendList extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const friendListItems = (!this.props.friendList || !this.props.friendList[0]) ? (null) : (
            <ul className="friend-list-ul">
                {this.props.friendList.map((friend, idx) =>
                    <FriendListItem key={idx} friend={friend} />
                )}
            </ul>
        )
        return (          
            <div className="friend-list-container">
                <span className="friend-list-container-name"><i className="fas fa-user-friends"></i>&nbsp;Friends</span>
                {friendListItems}
            </div>
        )
    }
}
export default FriendList;