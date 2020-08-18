# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all 

emily = User.create!(
  username: 'Emily',
  email: 'emily123@appacademy.com',
  gender: 'Female',
  password: '123456'
)

mandy = User.create!(
   username: 'Mandy',
  email: 'mandy123@appacademy.com',
  gender: 'Female',
  password: '123456'
)

chris = User.create!(
   username: 'Chris',
  email: 'chris456@appacademy.com',
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
   username: 'Jack',
  email: 'jackie@email',
  gender: 'Male',
  password: '123456'
)

demo3 = User.create!(
   username: 'Amy',
  email: 'amy@email',
  gender: 'Female',
  password: '123456'
)