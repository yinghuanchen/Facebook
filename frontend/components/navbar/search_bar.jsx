import React from 'react'; 
import {Link} from 'react-router-dom'; 
import { ThemeProvider } from 'react-bootstrap';
class SearchBar extends React.Component { 
    constructor(props) {
        super(props); 
        this.state = {searchInput: '', isDropDownOpen: false};
        this.handleUpdate = this.handleUpdate.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
    }
    handleUpdate(e) {
        const inputStr = e.currentTarget.value;
        this.setState({ searchInput: inputStr}); 
        this.props.searchUsers(inputStr.trim()); 
        if (inputStr && !this.state.isDropDownOpen) {
            this.setState({ isDropDownOpen: true}); 
        } else if (!inputStr && this.state.isDropDownOpen) {
            this.setState({ isDropDownOpen: false });
        }
    }

    handleClick(e) {
        e.preventDefault(); 
        if (this.state.searchInput.trim()) {
            this.props.history.push(`/search?username=${this.state.searchInput.trim()}`);
            this.setState({ isDropDownOpen: false, searchInput: this.state.searchInput.trim() });
        } 
    }

   

    componentDidUpdate(prevProps) {
        if (this.props.path !== prevProps.path) {
            this.setState({ isDropDownOpen: false, searchInput: ''});
        }
    }

    render () {
        const dropDownContent = this.state.isDropDownOpen && this.props.searchResults ? (
            <div className="search-bar-drop-down">
                <ul>
                    {this.props.searchResults.map((user, idx) => 
                        <li key={idx} className="search-bar-item">
                            <div className="search-bar-img-container">
                                <Link to={`/users/${user.id}`}><img src={user.profilePicture} alt="" id="img" className="img" /></Link>
                            </div> 
                            <Link to={`/users/${user.id}`}>{user.username}</Link>
                        </li>
                    )}
                </ul>
            </div>
        ) : null;

        return (
            <div>
                <Link to='/newsfeed' className="navbar-newsfeed-link"><i className="fab fa-facebook-square fa-2x"></i></Link>
                <div className="search-bar-input">
                    <input type="text" className="search-bar-input-text" value={this.state.searchInput} onChange={this.handleUpdate} />
                    <button className="search-bar-input-btn" onClick={this.handleClick}><i className="fas fa-search fa-2x search-bar-input-icon"></i></button>
                </div>
                {dropDownContent}
                {/* <button onClick={}><i className="fa fa-search"></i></button> */}
            </div>
        )
    }



}

export default SearchBar; 