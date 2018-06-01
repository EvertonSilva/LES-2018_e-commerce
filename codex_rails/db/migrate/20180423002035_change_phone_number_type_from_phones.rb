class ChangePhoneNumberTypeFromPhones < ActiveRecord::Migration[5.1]
  def change
    change_column :phones, :phone_number_type, 'USING phone_number_type::integer'
  end
end
