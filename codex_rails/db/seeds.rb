# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create authors
authors_list = [
  { name: 'Dijkstra, Edsger'},
  { name: 'Ritchie, Dennis'},
  { name: 'Tolkien, J.R.R.'},
  { name: "Matsumoto, Yukihiro 'Matz'"},
  { name: 'Hansson, David H.'},
  { name: 'Gosling, James'},
  { name: 'Dostoiévski, Fiodor'},
  { name: 'Palahniuk, Chuck'},
  { name: 'Sarte, Jean P.' }
]
Author.create(authors_list)

# create categories
categories_list = [
  { name: 'Computer Science', desc: 'lorem ipsum' },
  { name: 'Fantasy & Fiction', desc: 'lorem ipsum'},
  { name: 'Terror', desc: 'lorem ipsum'},
  { name: 'Sci Fi', desc: 'lorem ipsum'}
]
Category.create(categories_list)

# create price price groups
price_groups = [
  { desc: "pg1", markup: 5 },
  { desc: "pg2", markup: 10 },
  { desc: "pg3", markup: 15 },
  { desc: "pg4", markup: 25 },
  { desc: "pg5", markup: 30 },
]
PriceGroup.create(price_groups)

# create publishers
publishers_list = [
  { name: "Editora 34" },
  { name: "Novatec" },
  { name: "Booksman" },
  { name: "Leya" },
  { name: "Cia das Letras" },
]
Publisher.create(publishers_list)

# create edition
Edition.create({ publish_year: Time.new(2005), page_numbers: 200, dimensions: Dimensions.new(12,15,120,8), publisher_id: 1 });
