import React from 'react'; 
import {Link} from 'react-router-dom';

class  FriendList extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (!this.props.friendList || !this.props.friendList[0]) return null;
        return (          
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.friendList.map((friend, idx) =>
                        <li key={idx}>
                            <Link to={`/users/${friend.id}`} >{friend.username}</Link>
                        </li>
                    )}
                </ul>

            </div>
        )
    }
}
export default FriendList;