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
            <div className="navbar-container">
                <Link to='/newsfeed' className="navbar-newsfeed-link">f</Link>
                {/* <button className="logout-button" >Log out</button> */}
                <div className="dropdown">
                    <button className="dropbtn"><i className="arrow down"></i></button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a className="logout-button" onClick={this.handleLogout}>Log out</a>
                    </div>
                </div>
            </div>
        ) : null;
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default NavBar;