class ChangesCategory < ApplicationRecord

  validates_presence_of :name, :change_type

  has_many :status_changes
end
