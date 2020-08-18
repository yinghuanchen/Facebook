import React from 'react'; 
import {Link} from 'react-router-dom';
class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {

    // }

    render() {
        return (
            <div className="newsfeed">
                <h1>NewsFeed</h1>
                <Link className="user-show-link" to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
            </div>
        )
    }
}

export default NewsFeed;