class CreatePriceGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :price_groups do |t|
      t.string :description
      t.integer :markup

      t.timestamps
    end
  end
end
