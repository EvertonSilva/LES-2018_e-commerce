class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :id_document
      t.date :dob
      t.integer :gender
      t.integer :ranking

      t.timestamps
    end
  end
end
