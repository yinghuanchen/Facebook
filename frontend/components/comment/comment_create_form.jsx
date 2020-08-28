import React from 'react'; 

class CommentForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {body:''};
        this.handleUpdate = this.handleUpdate.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this); 
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    handleUpdate(e) {
        this.setState({ body: e.currentTarget.value});
    }

    onKeyPress(e) {
        // e.preventDefault();
        // debugger 
        if (e.which === 13 && this.state.body) {     
            const { postId, createComment, fetchPost} = this.props; 
            createComment({ body: this.state.body, post_id: postId }).then(() => {
                fetchPost(this.props.postId);
            });
            this.setState({ body: '' });  
        }
    }


    render () {
        const commentForm = this.props.isCommentable? (
            <input className="comment-input-form" type='text' placeholder="Write a comment..." value={this.state.body} onChange={this.handleUpdate} onKeyPress={this.onKeyPress} />
        ) : null; 
        return (
            <div className="comment-create-form">
                {commentForm}
            </div>
        )
       
    }
}
export default CommentForm;