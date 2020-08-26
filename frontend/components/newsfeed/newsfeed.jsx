import React from 'react'; 
import {Link} from 'react-router-dom';
import NewsfeedPostFormContainer from './../post/newsfeed_create_post_form_container';
import NewsfeedPostIndexContainer from './../post/newsfeed_post_index_container';
class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       // debugger
        if (this.props.currentUser) this.props.fetchUser(this.props.currentUser.id); 
        this.props.fetchAllUsers(); 
    }

    render() {
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
                <div className="newsfeed-right">
                    <NewsfeedPostFormContainer/>
                    <NewsfeedPostIndexContainer />
                </div>
               
                
            </div>
        )
    }
}

export default NewsFeed;