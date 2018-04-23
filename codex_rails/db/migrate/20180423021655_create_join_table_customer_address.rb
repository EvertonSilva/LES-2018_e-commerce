class CreateJoinTableCustomerAddress < ActiveRecord::Migration[5.1]
  def change
    create_join_table :customers, :addresses do |t|
      t.index [:customer_id, :address_id]
    end
  end
end
