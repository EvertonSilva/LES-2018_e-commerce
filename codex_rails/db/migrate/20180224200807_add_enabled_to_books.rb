class AddEnabledToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :enabled, :boolean
  end
end
