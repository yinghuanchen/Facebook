import React from 'react';  
import {Link} from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
import FriendRequestNotificationContainer from './friend_request_notification_container';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.history.replace('/'));
    }

    render() { 
        if (!this.props.currentUser) return null; 
        const friendNotification = this.props.currentUser.requesterIds.length === 0 ? (<button className={`dropbtn friend-notice-dropbtn`}><i className="fas fa-user-friends fa-2x"></i></button>) :(
            <FriendRequestNotificationContainer />
        )
        const display = this.props.currentUser ? (
            <nav className="navbar-container">
                {/* <button className="logout-button" >Log out</button> */}
                <SearchBarContainer />
                {friendNotification} 
                {/* <button><i className="fas fa-bell fa-2x"></i></button> */}
                <div className="dropdown">
                    <button className="dropbtn"><i className="arrow down"></i></button>
                    <div className="dropdown-content navbar-dropdown-content">
                        <a href="https://github.com/yinghuanchen"><i className="fab fa-github"></i> &nbsp;yinghuanchen</a>
                        <a href="https://www.linkedin.com/in/ying-huan-chen-790093119/"><i className="fab fa-linkedin"></i> &nbsp;Emily Chen</a>
                        <a href="https://angel.co/u/emily-ying-huan-chen"><i className="fab fa-angellist"></i> &nbsp;Emily Chen</a>
                        <a className="logout-button" onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i>&nbsp;Log out</a>
                    </div>
                </div>
            </nav>
        ) : null;
        return ( 
            <div className="navbar-container-container">
                {display}
            </div>
        )
    }
}

export default NavBar;