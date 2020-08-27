import React from 'react';
import {Link} from 'react-router-dom';
import SearchResultItem from './search_result_item';
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.searchUsers(this.props.nameQuery); 
    }

    render() {
        const searchResults = this.props.searchResults? (
            <div className="search-result-ul">
                {this.props.searchResults.map((user, idx) =>
                    <SearchResultItem user={user} key={idx} />
                )}
            </div>
        ) : null;
        return (
            <div className="newsfeed">
                <div className="newsfeed-left">
                    <ul className="newsfeed-user-profile">
                        <li className="newsfeed-user-information">
                            <div className="newsfeed-user-img-container">
                                <img className="newsfeed-user-img"
                                    src={this.props.currentUser.profilePicture} alt="" id="img" className="img" />
                            </div>
                            <Link className="user-show-link" to={`/users/${this.props.currentUser.id}`}>&nbsp;&nbsp;{this.props.currentUser.username}</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="/newsfeed"><i className="far fa-newspaper"></i>&nbsp;&nbsp;&nbsp;News Feed</Link>
                        </li>
                    </ul>
                </div>
                <div className="newsfeed-right search-result-container">
                    <h1>Search Result</h1>
                    <ul>
                        {searchResults}
                    </ul>
                  
                </div>
       </div>
        )
    }
}

export default SearchResult;