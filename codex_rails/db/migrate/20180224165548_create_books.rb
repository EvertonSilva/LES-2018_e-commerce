class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :isbn
      t.string :barcode
      t.text :synopsis
      t.integer :width
      t.integer :height
      t.integer :depth
      t.integer :weight
      t.integer :page_numbers
      t.string :edition
      t.string :publish_year
      t.integer :publisher_id

      t.timestamps
    end
  end
end
