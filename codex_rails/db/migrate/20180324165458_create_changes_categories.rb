class CreateChangesCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :changes_categories do |t|
      t.string :name
      t.integer :change_type

      t.timestamps
    end
  end
end
