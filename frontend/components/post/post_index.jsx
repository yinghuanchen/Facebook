import React from 'react'; 
import PostIndexItem from './post_index_item';
class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() { 
        // debugger 
        if (this.props.indexType === 'wall') this.props.fetchUser(this.props.match.params.userId); 
        else this.props.fetchUser(this.props.currentUser.id); 
        this.props.fetchAllPosts({ index_type: this.props.indexType, wall_id: this.props.match.params.userId}); 
    }

    render() {
        // debugger
        if (!this.props.posts) return null;  
        return (
            <div>
                <h1>Post Index!</h1>
                {this.props.posts.map((post,idx) => 
                    <PostIndexItem key={idx} post={post} />
                )} 
            </div>
        )
    }
}

export default PostIndex;