class BookSerializer < ActiveModel::Serializer
  attributes :title, :isbn, :barcode, :synopsis, :status
  belongs_to :author
  belongs_to :price_group
end
