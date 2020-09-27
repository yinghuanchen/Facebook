import React from "react";
// import FriendListItem from '../profile_side/friend_list_item';
import {Link} from 'react-router-dom'; 

const UserFriendInformation = ({ friendList }) => {
    if (!friendList || !friendList[0]) return null;
    return (
        <div>
            <div className="user-profile-information-header">
                <span><i className="fas fa-user-friends"></i>&nbsp;&nbsp;Friends</span>
            </div >
            <div className="user-profile-friend-information-body">
               {friendList.map((friend, idx) => 
                //    <FriendListItem friend={friend} key={idx}/> 
                <div className="user-profile-friend-item" key={idx}>
                       <div className="friend-list-item-img-container user-profile-friend-item-img">
                           <Link to={`/users/${friend.id}`}><img src={friend.profilePicture} alt="" /></Link>
                       </div>
                       <Link className="friend-list-item-link" to={`/users/${friend.id}`} >{friend.username}</Link>
                </div>
               )}
            </div>
        </div>
    )
}

export default UserFriendInformation;