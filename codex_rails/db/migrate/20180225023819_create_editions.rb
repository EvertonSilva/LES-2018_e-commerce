class CreateEditions < ActiveRecord::Migration[5.1]
  def change
    create_table :editions do |t|
      t.date :publish_year
      t.integer :page_numbers
      t.integer :width
      t.integer :height
      t.integer :weight
      t.integer :depth
      t.references :publisher, foreign_key: true
      t.references :book, foreign_key: true

      t.timestamps
    end
  end
end
