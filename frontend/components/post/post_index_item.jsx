import React from 'react';  
// import CommentIndexContainer from
class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="post-index-"> 
                <h3>Post Index Item!</h3>
                {/* <CommentIndexContainer />
                <CommentCreateForm idCommentable/> */}
            </div>
        )
       
    }
}


export default PostIndex;