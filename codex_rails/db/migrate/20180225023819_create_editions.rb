class CreateEditions < ActiveRecord::Migration[5.1]
  def change
    create_table :editions do |t|
      t.date :publish_year
      t.integer :pages_number
      t.string :width
      t.string :height
      t.string :weight
      t.string :depth
      t.references :publisher, foreign_key: true

      t.timestamps
    end
  end
end
