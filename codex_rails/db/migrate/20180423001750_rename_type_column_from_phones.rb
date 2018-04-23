class RenameTypeColumnFromPhones < ActiveRecord::Migration[5.1]
  def change
    rename_column :phones, :type, :phone_number_type
  end
end
