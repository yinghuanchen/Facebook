import React from 'react'; 
import {Link} from 'react-router-dom';
import NewsfeedPostFormContainer from './../post/newsfeed_create_post_form_container';
class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       // debugger
        if (this.props.currentUser) this.props.fetchUser(this.props.currentUser.id); 
    }

    render() {
        return (
            <div className="newsfeed">
                <div className="newsfeed-left">
                    <ul className="newsfeed-user-profile">
                        <li>
                            <Link className="user-show-link" to={`/users/${this.props.currentUser.id}`}><i className="fas fa-user"></i>&nbsp;&nbsp;{this.props.currentUser.username}</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="/newsfeed"><i className="far fa-newspaper"></i>&nbsp;News Feed</Link>
                        </li>
                    </ul>
                </div>
                <div className="newsfeed-right">
                    <NewsfeedPostFormContainer/>
                </div>
               
                
            </div>
        )
    }
}

export default NewsFeed;