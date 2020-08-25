@posts.each do |post|
    json.set! post.id do
        json.partial! 'post', post: post
    end
end 

if @authored_posts 
    @authored_posts .each do |post|
        json.set! post.id do
            json.partial! 'post', post: post
        end
    end 
end