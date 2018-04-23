class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.integer :address_type
      t.integer :public_place_type
      t.string :number
      t.string :district
      t.string :city
      t.string :state
      t.string :country
      t.string :postal_code
      t.string :public_place
      t.text :notes

      t.timestamps
    end
  end
end
