class Address < ApplicationRecord
  enum address_type: [:house, :apartment] # TODO: change this coloumn name to home_type
end
