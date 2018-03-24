class ChangesCategory < ApplicationRecord

  validates_presence_of :name, :change_type
  validates_associated :status_changes
  
  has_many :status_changes
end
