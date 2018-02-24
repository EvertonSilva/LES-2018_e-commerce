class Book < ApplicationRecord

  # validations

  # assossociations
  has_and_belongs_to_many :categories
  belongs_to :author
  has_one :price_group
end
