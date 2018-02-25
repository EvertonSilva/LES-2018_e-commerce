class AddEditionFkToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :edition_id, :integer
  end
end
