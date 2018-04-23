class CreditCard < ApplicationRecord

  belongs_to :creditcard_company
  belongs_to :customer
end
