import React from 'react';
import {Link} from 'react-router-dom'; 

class FriendRequestNotification extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.currentUser.requesterIds.length !== prevProps.requesterIds.length) {

    //     }
    // }
    render() {
        // debugger 
        if (!this.props.requesters || !this.props.requesters[0]) return null;  
        const colorClass = this.props.requesters.length === 0 ? "" : "friend-noitification";
        return(
            <div className="dropdown">
                <button className={`dropbtn friend-notice-dropbtn`}><i className="fas fa-user-friends fa-2x" id={`${colorClass}`}></i></button>
                <div className="dropdown-content" id="friend-dropdown-content">
                    <ul>
                        {this.props.requesters.map((requester, idx )=>  
                        <li key={idx}>
                            <div className="friend-request-notification-li">
                                <Link id="friend-request-notification-name" to={`/users/${requester.id}`}>{requester.username}</Link>
                                    <span className="friend-request-notification-text"> send you a friend request! </span>
                            </div>
                        </li>
                        )}
                    </ul>
                   
                    {/* <a href="https://github.com/yinghuanchen"><i className="fab fa-github"></i> &nbsp;yinghuanchen</a> */}
                </div>
            </div>
        )
    }
}

export default FriendRequestNotification;