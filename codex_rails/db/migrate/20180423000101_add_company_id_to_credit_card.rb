class AddCompanyIdToCreditCard < ActiveRecord::Migration[5.1]
  def change
    add_column :credit_cards, :creditcard_company_id, :integer
  end
end
