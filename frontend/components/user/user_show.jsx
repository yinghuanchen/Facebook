import React from 'react';
import ProfileHeaderContainer from './profile/profile_header/profile_header_container';
import ProfileSideContainer from './profile/profile_side/profile_side_container';
import ProfileBodyContainer from './profile/profile_body/profile_body_container'; 
import UserInformation from './profile/profile_body/user_information';
import UserFriendInformation from './profile/profile_body/user_friend_information';
class UserShow extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.fetchAllUsers(); 
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.wall !== prevProps.wall) {
            this.setState({wallId: this.props.wall.id}) 
        }
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
       const space =  this.props.match.params.userId != this.props.currentUser.id ? <div className="small-space"></div> : <></>; 
       return (
           <div className="user-profile-page">
               <div className="user-profile-page-header">
                   <ProfileHeaderContainer />
               </div>
               <div className="space"></div>
               {space}
               <div className="user-profile-page-content">
                   <ProfileSideContainer />
                   <ProfileBodyContainer />
               </div> 
              <div className="user-profile-information">
                   <UserInformation user={this.props.user} />
               </div> 
               <div className="space"></div>
               <div className="user-friends-information">
                   <UserFriendInformation friendList={this.props.friendList}/>
               </div> 
               
           </div>
       )
    }
}

export default UserShow;