class Book < ApplicationRecord

  # validations
  validates_presence_of :title, :isbn, :barcode, :synopsis
  validates_associated :edition

  # associations
  has_and_belongs_to_many :categories
  belongs_to :author
  belongs_to :edition
  belongs_to :price_group
end
