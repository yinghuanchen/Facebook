import React from 'react';
import ProfileHeaderContainer from './profile/profile_header/profile_header_container';
import ProfileSide from './profile/profile_side/profile_side_container';
import ProfileBody from './profile/profile_body/profile_body';
class UserShow extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.fetchAllUsers(); 
    }

    componentDidUpdate(prevProps) {
        if (this.props.wall !== prevProps.wall) {
            this.setState({wallId: this.props.wall.id})
        }
    }

    render() {
       return (
           <div className="user-profile-page">
               <div className="user-profile-page-header">
                   <ProfileHeaderContainer />
               </div>
               <div className="user-profile-page-content">
                   <ProfileSide />
                   <ProfileBody />
               </div>
               
           </div>
       )
    }
}

export default UserShow;