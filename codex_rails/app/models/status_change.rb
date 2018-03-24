class StatusChange < ApplicationRecord

  validates_presence_of :reason
  validates_associated :changes_category

  belongs_to :book
  belongs_to :changes_category
end
