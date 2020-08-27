# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all 

emily = User.create!(
  username: 'Emily Chen',
  email: 'emily123@appacademy.com',
  gender: 'Female',
  password: '123456'
)

mandy = User.create!(
   username: 'Mandy Chang',
  email: 'mandy123@appacademy.com',
  gender: 'Female',
  password: '123456'
)

chris = User.create!(
   username: 'Chris Yeh',
  email: 'chris456@appacademy.com',
  gender: 'Male',
  password: '123456'
)

jack = User.create!(
  username: 'Jack Wu',
  email: 'jack@email',
  gender: 'Male',
  password: '123456'
)

jenny = User.create!(
   username: 'Jenny Shen',
  email: 'jenny@email',
  gender: 'Female',
  password: '123456'
)

mike = User.create!(
  username: 'Mike Kuo',
  email: 'mike@email',
  gender: 'Male',
  password: '123456'
)



demo1 = User.create!(
  username: 'Demo',
  email: 'demo@email',
  gender: 'Male',
  password: '123456'
)

demo2 = User.create!(
   username: 'Jack Chen',
  email: 'jackie@email',
  gender: 'Male',
  password: '123456'
)

demo3 = User.create!(
   username: 'Amy Fan',
  email: 'amy@email',
  gender: 'Female',
  password: '123456'
)
Friendship.delete_all 
# Friendship.create!(
#   user_first_id: chris.id, 
#   user_second_id: emily.id
# )

# Friendship.create!(
#   user_first_id: emily.id,
#   user_second_id: chris.id 
# )

# Friendship.create!(
#   user_first_id: emily.id,
#   user_second_id: mandy.id 
# )

# Friendship.create!(
#   user_first_id: mandy.id,
#   user_second_id: emily.id 
# )

# Friendship.create!(
#   user_first_id: chris.id,
#   user_second_id: jack.id 
# )

# Friendship.create!(
#   user_first_id: jack.id,
#   user_second_id: chris.id 
# )



# Post.delete_all 

# Post.create!(
#   author_id: chris.id, 
#   wall_id: chris.id, 
#   body: 'My first post!'
# )

# Post.create!(
#   author_id: chris.id, 
#   wall_id: chris.id, 
#   body: 'My second post!'
# )

# Post.create!(
#   author_id: chris.id, 
#   wall_id: emily.id, 
#   body: `How's it going?`
# )