class Book < ApplicationRecord

  # validations
  validates_presence_of :title, :isbn, :barcode, :synopsis
  validates_associated :edition

  # associations
  has_and_belongs_to_many :categories
  has_many :editions
  belongs_to :author
  belongs_to :price_group

  # scopes
end
