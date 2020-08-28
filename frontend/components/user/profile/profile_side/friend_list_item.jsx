import React from 'react'; 
import {Link} from 'react-router-dom'; 

class FriendListItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        const {friend} = this.props;
        return (
            <li className="friend-list-item">
                <div className="friend-list-item-img-container">
                    <Link to={`/users/${friend.id}`}><img src={friend.profilePicture} alt="" /></Link>
                </div>
                <Link className="friend-list-item-link" to={`/users/${friend.id}`} >{friend.username}</Link>
            </li>
        )
    }
}


export default FriendListItem;