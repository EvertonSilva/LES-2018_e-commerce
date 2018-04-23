class AddCustomerIdToCreditCard < ActiveRecord::Migration[5.1]
  def change
    add_column :credit_cards, :customer_id, :integer
  end
end
