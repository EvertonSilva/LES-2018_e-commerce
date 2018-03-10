class Dimensions
  attr_reader :width, :height, :weight, :depth

  def initialize(width, height, weight, depth)
    @width, @height, @weight, @depth = width, height, weight, depth
  end

end
