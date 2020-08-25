import React from 'react';
import FriendList from './friend_list';

class ProfileSide extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        return (
            <div className="profile-side-page">
                <FriendList friendList={this.props.friendList} />
            </div>
        )
    }
}

export default ProfileSide;




