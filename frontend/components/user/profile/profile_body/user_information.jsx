import React from "react"; 

const UserInformation = ({user}) => {
    if(user == null) return null;
    return (
        <div>
            <div className="user-profile-information-header">
                <span><i className="fas fa-user"></i>&nbsp;&nbsp;About</span>
            </div >            
            <ul className="user-profile-information-body">
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Gender: {user.gender}</li>
           </ul>
        </div>
    )
}

export default UserInformation;