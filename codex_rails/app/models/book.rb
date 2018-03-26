class Book < ApplicationRecord
  before_create :set_status
  # validations
  validates_presence_of :title, :isbn, :barcode, :synopsis
  validates_associated :editions

  # associations
  has_and_belongs_to_many :categories
  has_many :editions
  has_many :status_changes
  belongs_to :author
  belongs_to :price_group

  # scopes

  private
  def set_status
    self.enabled = false
  end
end
