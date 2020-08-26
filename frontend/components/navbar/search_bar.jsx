import React from 'react'; 
import {Link} from 'react-router-dom'; 
import { ThemeProvider } from 'react-bootstrap';
class SearchBar extends React.Component { 
    constructor(props) {
        super(props); 
        this.state = {searchInput: '', isDropDownOpen: false};
        this.handleUpdate = this.handleUpdate.bind(this); 
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
                                <img src={user.profilePicture} alt="" id="img" className="img" />
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
                <input type="text" className="search-bar-input" value={this.state.searchInput} onChange={this.handleUpdate}/>
                {dropDownContent}
                {/* <button onClick={}><i className="fa fa-search"></i></button> */}
            </div>
        )
    }



}

export default SearchBar; 