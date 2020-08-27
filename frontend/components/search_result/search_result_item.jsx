import React from 'react'; 
import {Link} from 'react-router-dom'; 
class SearchResultItem extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        const user  = this.props.user;
        return (
            <li className="search-result-item">
                <div className="friend-list-item-img-container">
                    <Link to={`/users/${user.id}`}><img src={user.profilePicture} alt="" /></Link>
                </div>
                <Link className="friend-list-item-link search-result-item-link" to={`/users/${user.id}`} >{user.username}</Link>
            </li>
        )
    }
}

export default SearchResultItem;