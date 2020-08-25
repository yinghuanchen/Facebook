json.key_format! camelize: :lower 
json.set! @user1.id do
    json.partial! 'api/users/user', user: @user1
end 
json.set! @user2.id do
    json.partial! 'api/users/user', user: @user2
end 