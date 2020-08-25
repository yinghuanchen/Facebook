import React from 'react';
import WallCreatePostFormContainer from './../../../post/wall_create_post_form_container';
import WallPostIndexContainer from './../../../post/wall_post_index_container'; 

class ProfileBody extends React.Component {
    constructor(props) {
        super(props);
    } 
    componentDidMount() {
        this.props.fetchAllPosts({ index_type: this.props.indexType, wall_id: this.props.match.params.userId }); 
    }

    render() {
        return (
            <div className="profile-body-page">
                <WallCreatePostFormContainer />
                <WallPostIndexContainer />
            </div>
        )
        
    }
}

export default ProfileBody; 
