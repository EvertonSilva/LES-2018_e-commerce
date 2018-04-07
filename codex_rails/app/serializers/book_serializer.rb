class BookSerializer < ActiveModel::Serializer
  attributes :title, :isbn, :barcode, :synopsis,
              :enabled, :edition, :width, :height,
              :weight, :depth
  belongs_to :author
  belongs_to :price_group
  belongs_to :publisher
  has_many :categories
  has_many :status_changes
end
