class CreateChangesCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :changes_categories do |t|
      t.string :name
      t.boolean :change_type

      t.timestamps
    end
  end
end
