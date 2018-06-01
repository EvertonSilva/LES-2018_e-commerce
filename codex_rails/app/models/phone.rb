class Phone < ApplicationRecord
  enum phone_number_type: [:home, :mobile]
end
