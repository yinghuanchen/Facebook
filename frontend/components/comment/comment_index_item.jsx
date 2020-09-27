import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.comment = this.props.comment;
    this.state = { isEditFormShow: false, body: this.props.comment.body, height: "0px" };
  }

  openEditForm() {
    
    const height = document.getElementById(`${this.comment.id}`).offsetHeight;
    debugger;
    document.getElementById(`editform-${this.comment.id}`).style.display = "block"; 
    document.getElementById(
      `edit-${this.comment.id}`
    ).style.height = `${height}px`;
    debugger;
    this.setState({height: height});
    this.setState({ isEditFormShow: true }, () => {
        //  debugger;
        // document.getElementById(`edit-${this.comment.id}`).height = height
    });
    

  }

  closeEditForm() {
    this.setState({ isEditFormShow: false, body: this.props.comment.body});
    document.getElementById(`editform-${this.comment.id}`).style.display = "none"; 
    
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteComment(this.props.comment.id)
      .then(() => this.props.fetchPost(this.props.postId));
  }

  handleUpdate(e) {
    this.setState({
      body: e.currentTarget.value,
    });
  }

  onKeyPress(e) {
    if (e.which === 13 && this.state.body) {
        this.comment.body = this.state.body;
      const { updateComment, fetchComment} = this.props;
        updateComment(this.comment).then(() => {
        fetchComment(this.props.comment.id);
        this.setState({ isEditFormShow: false});
        document.getElementById(`editform-${this.comment.id}`).style.display =
          "none"; 
      });
     
    }
  }

  render() {
    const deleteButton = this.props.isEditable ? (
      <div className="dropdown friend-dropdown comment-dropdown">
        <button className="delete-comment-btn">
          <i className="fas fa-ellipsis-h"></i>
        </button>
        <div className="dropdown-content comment-dropdown-content">
          <button className="post-dropdown-a" onClick={this.openEditForm}>
            <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
          </button>
          <button className="post-dropdown-a" onClick={this.handleDelete}>
            <i className="fas fa-trash-alt"></i>&nbsp;&nbsp;Delete
          </button>
        </div>
      </div>
    ) : (
      <button className="delete-comment-btn">
        <i className="fas fa-ellipsis-h"></i>
      </button>
    );
    if(this.state.isEditFormShow) { 
        // document.getElementById(`edit-${this.comment.id}`).height = this.state.height;
    }
    // const editFrom = this.state.isEditFormShow ? (
    //   <div className="comment-edit-form-container">
    //     <textarea
    //       className="comment-edit-form"
    //       id={`edit-${this.comment.id}`}
    //       type="text"
    //       value={this.state.body}
    //       onChange={this.handleUpdate}
    //       onKeyPress={this.onKeyPress}
    //     />
    //     <span onClick={this.closeEditForm}>cancel</span>
    //   </div>
    // ) : null;
    return (
      <div className="comment-index-item">
        <div className="comment-index-item-body">
          <div className="comment-index-item-author-information">
            <div className=" comment-index-item-img-container">
              <Link to={{ pathname: `/users/${this.props.authorId}` }}>
                <img
                  className="post-index-item-author-img"
                  src={this.props.authorProfilePic}
                  alt=""
                  id="img"
                  className="img"
                />
              </Link>
            </div>
            {deleteButton}
          </div>
          <div className="comment-index-item-body-text" id={this.comment.id}>
            <div className="comment-index-item-author-name">
              <Link to={{ pathname: `/users/${this.props.authorId}` }}>
                <span>{this.props.authorName}</span>
              </Link>
            </div>
            <span className="comment-index-item-text">
              {this.props.comment.body}
              <div
                className="comment-edit-form-container"
                id={`editform-${this.comment.id}`}
              >
                <textarea
                  className="comment-edit-form"
                  id={`edit-${this.comment.id}`}
                  type="text"
                  value={this.state.body}
                  onChange={this.handleUpdate}
                  onKeyPress={this.onKeyPress}
                />
                <span onClick={this.closeEditForm}>cancel</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;