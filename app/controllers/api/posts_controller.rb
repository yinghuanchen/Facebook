class Api::PostsController < ApplicationController
    before_action :require_logged_in 

    def create
        # pass in body and wall_id 
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
        render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find(params[:id])
        if @post
            render :show
        else
            render json:  @post.errors.full_messages, status: 404
        end
    end

    def index
        #debugger
        if params[:post][:index_type] == 'wall'
            user = User.find_by(id: params[:post][:wall_id].to_i)
            @posts = user.wall_posts
        elsif params[:post][:index_type] == 'newsfeed' 
            @posts = Post.joins(:user_friends).where("friendships.user_second_id = ?", current_user.id)
            @user = User.find_by(id: current_user.id) 
            @authored_posts = @user.authored_posts 
        end 
        render :index
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render json:  @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if  current_user.id ==  @post.author_id || current_user.id ==  @post.wall_id
            @post.destroy
            render :show
        else
            render json: ["You don't have the right to destroy this post"], status: 422
        end
    end

    private
    def post_params
        params.require(:post).permit(:body, :wall_id, :index_type)
    end

end
