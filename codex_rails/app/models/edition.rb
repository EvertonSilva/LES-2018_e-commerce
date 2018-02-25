class Edition < ApplicationRecord

  belongs_to :publisher

  def dimension
    Dimension.new(width, height, weight, depth)
  end

  def dimension=(dimension)
    self.width = dimension.width
    self.height = dimension.height
    self.weight = dimension.weight
    self.depth = dimension.depth
  end
end
