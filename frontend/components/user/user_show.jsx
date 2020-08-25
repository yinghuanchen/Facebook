import React from 'react';
import ProfileHeaderContainer from './profile/profile_header/profile_header_container';
import ProfileSideContainer from './profile/profile_side/profile_side_container';
import ProfileBodyContainer from './profile/profile_body/profile_body_container';
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
                   <ProfileSideContainer />
                   <ProfileBodyContainer />
               </div>
               
           </div>
       )
    }
}

export default UserShow;