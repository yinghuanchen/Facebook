import React from 'react'; 
import {Link} from 'react-router-dom';
class UserIndex extends React.Component {
    constructor(props) {
        super(props); 
    }
    
    componentDidMount() {
        this.props.fetchAllUsers(); 
    }

    render() {
        if (this.props.users.length==0) return null; 
        return (
            <ul>
                {this.props.users.map(user => 
                    <li>
                        <Link to={`/users/${user.id}`}>{user.username}</Link>
                    </li>
                )}
               
            </ul>
        )
    }
}

export default UserIndex;