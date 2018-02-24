class Book < ApplicationRecord

  # validations
  validates_presence_of :title, :isbn, :barcode, :synopsis

  # assossociations
  has_and_belongs_to_many :categories
  belongs_to :author
  has_one :price_group
end
