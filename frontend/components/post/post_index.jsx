import React from 'react'; 
import PostIndexItem from './post_index_item'; 
class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() { 
        // if (this.props.indexType === 'wall') this.props.fetchUser(this.props.match.params.userId); 
        // else this.props.fetchUser(this.props.currentUser.id); 
        this.props.fetchAllPosts({ index_type: this.props.indexType, wall_id: this.props.match.params.userId}); 
    } 

    componentDidUpdate(prevProps) {
        if (this.props.indexType !== prevProps.indexType || this.props.wall.id != prevProps.wall.id) {
            this.props.fetchAllPosts({ index_type: this.props.indexType, wall_id: this.props.match.params.userId });
        } 
    }

    render() {
        if (!this.props.posts || !this.props.posts[0]) return null;  
        return (
            <div className="post-index-container">
                {this.props.posts.map((post,idx) => 
                    <PostIndexItem 
                        key={idx} post={post} fetchPost={this.props.fetchPost} 
                        fetchAllComments={this.props.fetchAllComments} 
                        currentUser={this.props.currentUser}
                        createComment={this.props.createComment}
                        authorName={this.props.authors[idx].username}
                        authorProfilePic={this.props.authors[idx].profilePicture} 
                        createlike={this.props.createlike}
                        deletelike={this.props.deletelike}
                    />
                )} 
            </div>
           
        )
    }
}

export default PostIndex;