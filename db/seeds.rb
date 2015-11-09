# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(
  :email => 'novak@gmail.com',
  :password => 'password',
  :password_confirmation => 'password'
)

User.create!(
  :email => 'andy@gmail.com',
  :password => 'password',
  :password_confirmation => 'password'
)

User.create!(
  :email => 'roger@gmail.com',
  :password => 'password',
  :password_confirmation => 'password'
)

1.upto(3) do |user_id|
  5.times do |_|
    Exercise.create!(
      :user_id => user_id,
      :name => Faker::Hacker.noun,
      :weight => Faker::Number.number(2),
      :sets => Faker::Number.number(2),
      :reps => Faker::Number.number(3),
      :date => Faker::Date.backward(5)
    )
  end
end
