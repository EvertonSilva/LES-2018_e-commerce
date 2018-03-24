class CreateStatusChanges < ActiveRecord::Migration[5.1]
  def change
    create_table :status_changes do |t|
      t.text :reason
      t.references :book, foreign_key: true
      t.references :changes_category, foreign_key: true

      t.timestamps
    end
  end
end
