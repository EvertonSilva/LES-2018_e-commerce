class Edition < ApplicationRecord

  belongs_to :publisher

  def dimensions
    Dimensions.new(self.width, self.height, self.weight, self.depth)
  end

  def dimensions=(dimensions)
    self.width = dimensions.width
    self.height = dimensions.height
    self.weight = dimensions.weight
    self.depth = dimensions.depth
  end
end
