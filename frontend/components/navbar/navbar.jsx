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
                <button className="logout-button" onClick={this.handleLogout}>Log out</button>
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