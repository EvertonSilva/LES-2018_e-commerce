class EditionSerializer < ActiveModel::Serializer
  attributes :id, :publish_year, :page_numbers, :dimensions
  belongs_to :publisher
  belongs_to :book
end
