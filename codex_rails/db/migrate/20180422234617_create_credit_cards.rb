class CreateCreditCards < ActiveRecord::Migration[5.1]
  def change
    create_table :credit_cards do |t|
      t.string :card_number
      t.string :printed_name
      t.string :security_code

      t.timestamps
    end
  end
end
