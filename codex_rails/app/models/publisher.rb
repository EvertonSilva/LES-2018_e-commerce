class Publisher < ApplicationRecord

  validates :name, presence: true, allow_nil: false

  has_many :editions
end
