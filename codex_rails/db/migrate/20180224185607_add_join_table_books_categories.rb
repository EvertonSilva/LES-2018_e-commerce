class AddJoinTableBooksCategories < ActiveRecord::Migration[5.1]
  def change
    create_join_table :books, :categories
  end
end
