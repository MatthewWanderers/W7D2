# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




todos = []

20.times do
  todos << { title: Faker::HarryPotter.location, body: Faker::HarryPotter.house, done: false }
end

todos.each do |todo|
  Todo.create(todo)
end

 # Todo.create(title: 'Luke', body: movies.first)
