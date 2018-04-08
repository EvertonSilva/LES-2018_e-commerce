class Book < ApplicationRecord
  before_create :set_status
  # validations
  validates_presence_of :title, :isbn, :barcode, :synopsis, :edition,
                        :page_numbers, :width, :height, :weight, :depth
  # associations
  has_and_belongs_to_many :categories
  has_many :status_changes
  belongs_to :author
  belongs_to :publisher
  belongs_to :price_group
  has_paper_trail   # enable audit support
  # scopes

  private
  def set_status
    self.enabled = false
  end
end
