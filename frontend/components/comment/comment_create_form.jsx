import React from 'react'; 

class CommentForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {body:''};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleUpdate(e) {
        this.setState({ body: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId, createComment, fetchPost} = this.props; 
        createComment({ body: this.state.body, post_id: postId }).then(() => {
           fetchPost(this.props.postId);
        });
    }


    render () {
        <div className="comment-create-form">
            <form onSubmit={this.handleSubmit}>
                <textarea placeholder="Write a comment..." onChange={this.handleUpdate} />
            </form>
        </div>
    }
}