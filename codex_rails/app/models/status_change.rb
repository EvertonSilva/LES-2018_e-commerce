class StatusChange < ApplicationRecord
  belongs_to :book
  belongs_to :changes_category
end
