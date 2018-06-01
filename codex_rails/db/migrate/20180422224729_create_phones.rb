class CreatePhones < ActiveRecord::Migration[5.1]
  def change
    create_table :phones do |t|
      t.string :type
      t.string :areaCode
      t.string :number

      t.timestamps
    end
  end
end
