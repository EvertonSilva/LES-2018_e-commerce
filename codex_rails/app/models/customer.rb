class Customer < ApplicationRecord
  enum gender: [:male, :female]

  has_many :credit_cards
  has_and_belongs_to_many :addresses
end
