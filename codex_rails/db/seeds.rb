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
  { name: 'Sartre, Jean-P.' }
]
Author.create(authors_list)

# create categories
categories_list = [
  { name: 'Computer Science', description: 'lorem ipsum' },
  { name: 'Fantasy & Fiction', description: 'lorem ipsum'},
  { name: 'Terror', description: 'lorem ipsum'},
  { name: 'Sci Fi', description: 'lorem ipsum'}
]
Category.create(categories_list)

# create price price groups
price_groups = [
  { description: "pg1", markup: 5 },
  { description: "pg2", markup: 10 },
  { description: "pg3", markup: 15 },
  { description: "pg4", markup: 25 },
  { description: "pg5", markup: 30 },
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

# create change categories
activate_categories = [
  { name: "iniciar vendas", change_type: 1 },
  { name: "retomar vendas", change_type: 1 },
]
ChangesCategory.create(activate_categories)

inactivate_categories = [
  { name: "fora de mercado", change_type: 0 },
  { name: "suspender vendas", change_type: 0 },
]
ChangesCategory.create(inactivate_categories)
