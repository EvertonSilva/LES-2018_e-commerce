class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :isbn
      t.string :barcode
      t.text :synopsis

      t.timestamps
    end
  end
end
