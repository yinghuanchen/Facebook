class Api::LikesController < ApplicationController
    before_action :require_logged_in 
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.post_id = params[:like][:post_id].to_i 
        @post.find_by(id: params[:like][:post_id].to_i)
        if @like.save 
            render "api/posts/show"
        else 
            render  @like.errors.full_messages, status: 422
        end 
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        @post.find_by(id: params[:like][:post_id].to_i)
        @like.destroy
        render "api/posts/show"
    end

    private
    def like_params 
        params.require(:like).permit(:post_id)
    end 
end
