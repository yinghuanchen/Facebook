class Api::CommentsController < ApplicationController
    before_action :require_logged_in 

    def index
        @post = Post.find_by(id: params[:post_id])
        if @post
            @comments = @post.comments
            render :index
        else
            render json: ["Cannot find corresponding post!"], status: 404
        end
    end 

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        debugger
        @comment = Comment.new(comment_params) 
        @comment.author_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update 
        @comment = Comment.find_by(id: params[:id])
        if current_user.id == @comment.author_id
            if @comment.update(comment_params)
                render :show
            else
                render json:  @comment.errors.full_messages, status: 422
            end
        else
            render json: ["You can only update your own comment"], status: 422
        end 
    end 

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if  current_user.id == @comment.author_id || current_user.id == @comment.wall.id
            @comment.destroy
            render :show
        else
            render json:["You don't have the right to destroy this comment"], status: 422
        end
    end



    private
    def comment_params 
        params.require(:comment).permit(:body, :post_id)
    end

end
