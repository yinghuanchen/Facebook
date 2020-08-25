import React from 'react';  
import {Link} from 'react-router-dom';
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
        const display = this.props.currentUser ? (
            <nav className="navbar-container">
                <Link to='/newsfeed' className="navbar-newsfeed-link"><i className="fab fa-facebook-square fa-2x"></i></Link>
                {/* <button className="logout-button" >Log out</button> */}
                <div className="dropdown">
                    <button className="dropbtn friend-notice-dropbtn"><i className="fas fa-user-friends fa-2x"></i></button>
                    <div className="dropdown-content friend-dropdown-content">
                        <a href="https://github.com/yinghuanchen"><i className="fab fa-github"></i> &nbsp;yinghuanchen</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn"><i className="arrow down"></i></button>
                    <div className="dropdown-content">
                        <a href="https://github.com/yinghuanchen"><i className="fab fa-github"></i> &nbsp;yinghuanchen</a>
                        <a href="https://www.linkedin.com/in/ying-huan-chen-790093119/"><i className="fab fa-linkedin"></i> &nbsp;Emily Chen</a>
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