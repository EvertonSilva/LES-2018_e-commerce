class AddAuthorFkToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :author_id, :integer
    add_foreign_key :books, :authors
  end
end
