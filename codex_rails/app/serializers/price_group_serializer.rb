class PriceGroupSerializer < ActiveModel::Serializer
  attributes :id, :description, :markup

  has_many :books
end
