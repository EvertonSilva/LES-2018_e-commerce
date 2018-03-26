class BookSerializer < ActiveModel::Serializer
  attributes :title, :isbn, :barcode, :synopsis, :enabled
  belongs_to :author
  belongs_to :price_group
  has_many :categories
  has_many :editions
  has_many :status_changes
end
