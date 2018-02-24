class AddPriceGroupFkTBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :price_group_id, :integer
    add_foreign_key :books, :price_groups
  end
end
