# Facebook 

My [Facebook](https://yinghuanchen-facebook.herokuapp.com/#/) is a web application that allows users to make friends with other users. It's a clone of the popular social media app [Facebook](https://www.facebook.com/). 


<img width="1107" alt="Screen Shot 2020-09-28 at 3 55 41 PM" src="https://user-images.githubusercontent.com/65005487/94405651-7211d380-01a3-11eb-9876-351be49200a1.png">

## Table of Contents  
  * Technology  
  * Features
  * Code Snippets 
  * Design Documents
  
## Technology 
  * Ruby on Rails 5.2.3 
  * React 16.3.1
  * Redux 4.0.5
  * PostgreSQL 
  * AWS S3 

## Features 
  My app have three main features: User Friending, User Profile and Newsfeed and Post, Comment and Like.

### Friending 
  User can make friends with other users. User are allowed to post on friends' walls and comment on friends' posts. 

  1. Search for a user and send/cancel friend request 

  ![friend_request](https://user-images.githubusercontent.com/65005487/94422432-a98b7a80-01b9-11eb-82d9-932f28086b3b.gif)

  2. Accept/Decline a friend request 

  ![accept_friend_request](https://user-images.githubusercontent.com/65005487/94421853-c70c1480-01b8-11eb-8670-69fdadbef3e0.gif)

  3. Remove a friend 

  ![unfriend](https://user-images.githubusercontent.com/65005487/94421897-d723f400-01b8-11eb-9700-047ec737eace.gif)

### User Profile and Newsfeed
  Each user has a newsfeed page and profile page. 
  
  1. On Newsfeed, user can see his/her own posts and friends' post 

  ![newsfeed](https://user-images.githubusercontent.com/65005487/94423164-c6747d80-01ba-11eb-8446-e670946d773e.gif)

  2. On Profile page, user can see posts on another user's wall and his/her friends 

  ![profile](https://user-images.githubusercontent.com/65005487/94441437-545d6200-01d5-11eb-87f5-174231a57adf.gif)

  3. On user's own profile page, he/she can change cover photo and profile picture 



### Post, Comment, and Like 
  User can post on his/her own wall or friends' walls, comment on his/her own posts or friends' posts and like a post.
  
  1. User can create/edit/delete a post on his/her own wall 

  ![create:edit:deletepost](https://user-images.githubusercontent.com/65005487/94438376-9e444900-01d1-11eb-8c4e-bc5a31bfad32.gif)

  2. User can post on a friend's wall 

  ![post_friends](https://user-images.githubusercontent.com/65005487/94440095-cdf45080-01d3-11eb-9a3f-d83d5dd48fa0.gif)

  3. User can create/edit/delete comment on his/her and friends' posts

  ![comment](https://user-images.githubusercontent.com/65005487/94440811-a0f46d80-01d4-11eb-8c19-a1cb17ead62f.gif)

  4. User can like/unlike a post 

  ![like](https://user-images.githubusercontent.com/65005487/94440379-39d6b900-01d4-11eb-82c8-866031931b87.gif)

## Code Snippets
  User friending is the most difficult part in my app. The following is the backend friendship route: 
  
  ```ruby
     def create 
        user_first_id, user_second_id = params[:friendship][:user_first_id].to_i, params[:friendship][:user_second_id].to_i 
        
        # The only way that two users become friends is that the current user accept a friend request from other users. 
        # First check whether a friend request between the two users exists.
        friend_request = FriendRequest.find_by(requester_id:  user_second_id, requestee_id: current_user.id)
        
        if friend_request 
        
            # Create two friendship instance with opposite order. 
            @friendship1 = Friendship.new(friendship_params) 
            tmp = {"user_first_id": user_second_id, "user_second_id": user_first_id}
            @friendship2 = Friendship.new(tmp)
            
            if @friendship1.save && @friendship2.save   
                # When creating a friendship, destroy the friend request between the two users  
                friend_request.destroy 
                @user1 = User.find_by(id: user_first_id)
                @user2 = User.find_by(id: user_second_id)
                # update both users 
                render "api/users/show_both"
            else 
                render json: @friend.errors.full_messages, status: 422
            end 
        else
            render json: ["No frined request!"], status: 404     
        end
    end
  ```
  
  At the front-end, the friend button has four conditions: 
   1. The user has no relationship with the current user 
   2. The user is current user's requester 
   3. The user is current user's requestee
   4. The user is current user's friend 
  
  I seperated them into three containers: 
   1. FriendRequestContainer: Handle 1 and 2-conditions. If it's in 1-condition, show Add Friend button, which allows current user to send a friend request. If it's in 2-condition, show Request Sent button with Delete Friend Request dropdown, which allows current user to cancel a friend request. 
   
   ```javascript
    
   class FriendRequest extends React.Component {
       constructor(props) {
           super(props); 
           this.state = {
               requestSend: this.props.requestSend,
           }
           this.handleSendFriendRequest = this.handleSendFriendRequest.bind(this);
           this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
       }


       handleSendFriendRequest(e) {
           e.preventDefault(); 
           this.props.sendFriendRequest(this.props.requesteeId);  
           this.setState({ requestSend: !this.state.requestSend });
       }

       handleDeleteFriendRequest(e) {
           e.preventDefault(); 
           this.props.deleteFriendRequest(this.props.currentUser.id, this.props.requesteeId); 
           this.setState({ requestSend: !this.state.requestSend });
       }
       
       render() {
           const { currentUser, requesteeId } = this.props;
           const btn = this.state.requestSend ? (
               <div className="dropdown friend-dropdown">
                   <button className="dropbtn friend-button"><i className="fas fa-share-square"></i>&nbsp;Friend Request Sent</button>
                   <div className="dropdown-content friend-drop-down-content">
                       <button className="friend-drop-down-a" onClick={this.handleDeleteFriendRequest}>Delete Friend Request</button >
                   </div>
               </div>

           ) : 
               (
               <button className="friend-button" onClick={this.handleSendFriendRequest}><i className="fas fa-user-plus">
               </i>&nbsp;Add Friend</button >
           );
           if (currentUser.friendIds.includes(requesteeId) || currentUser.requesterIds.includes(requesteeId)) {
               return null; 
           } else {
               return (
                  <>
                   {btn}
                  </>
               )
           }
       }
   }
   ```

   
   2. FriendRequestAcceptDeclineContainer: Handle 3-condition. Show Respond Friend Request button with Confirm and Delete dropdown, which allows user to accept or decline a friend request. 
   
   ```javascript
   class FriendRequestAcceptDecline extends React.Component {
      constructor(props) {
          super(props);
          this.handleAddFriendship = this.handleAddFriendship.bind(this);
          this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
      }

      handleAddFriendship(e) {
          e.preventDefault();
          const { currentUser, requesterId } = this.props;
          const friendship = { user_first_id: currentUser.id, user_second_id: requesterId };
          this.props.addFriendship(friendship);
      }

      handleDeleteFriendRequest(e) {
          e.preventDefault();
          const { currentUser, requesterId } = this.props;
          this.props.deleteFriendRequest(requesterId, currentUser.id);
      }


      render() {
          const { currentUser, requesterId } = this.props;
          if (currentUser.requesterIds.includes(requesterId)) {
              return (
                  <div className="dropdown friend-dropdown">
                      <button className="dropbtn friend-button"><i className="fas fa-user-plus"></i>&nbsp;Respond to Friend Request</button>
                      <div className="dropdown-content friend-drop-down-content">
                          <button className="friend-drop-down-a" onClick={this.handleAddFriendship}>Confirm</button >
                          <br/>
                          <button className="friend-drop-down-a" onClick={this.handleDeleteFriendRequest}>Delete</button >
                      </div>
                  </div>
              )
          } else {
              return null;
          }
      }
   }
   ```
   
   3. FriendContainer: Handle 4-condition. Shoe Friend button and an Unfriend dropdown, which allows user to delete an existing friend. 
  
  ```javascript
  class Friend extends React.Component {
        constructor(props) {
            super(props);
            this.handleDeleteFriendship = this.handleDeleteFriendship.bind(this);
        }

        handleDeleteFriendship(e) {
            e.preventDefault();
            const { currentUser, friendId } = this.props;
            const friendship = { user_first_id: currentUser.id, user_second_id: friendId };
            this.props.deleteFriendship(friendship);   
        }

        render() {
            const { currentUser, friendId } = this.props;

            if (currentUser.friendIds.includes(friendId)) {
              return (
                  <div className="dropdown friend-dropdown">
                      <button className="dropbtn friend-button"><i className="fas fa-check"></i>&nbsp;&nbsp;&nbsp;Friend&nbsp;&nbsp;&nbsp;<i className="fas fa-caret-down"></i></button>
                      <div className="dropdown-content friend-drop-down-content">
                          <button className="friend-drop-down-a" onClick={this.handleDeleteFriendship}>Unfriend</button >
                      </div>
                  </div>
              )

            } else {
               return null; 
            }
        }
  }
  ```
  
  ## Design Documents 
  [Design Documents](https://github.com/yinghuanchen/Facebook/wiki)
