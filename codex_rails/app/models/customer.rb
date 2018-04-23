class Customer < ApplicationRecord
  enum gender: [:male, :female]

  has_many :credit_cards
end
