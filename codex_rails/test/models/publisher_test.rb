require 'test_helper'

class PublisherTest < ActiveSupport::TestCase

  def setup
    @valid = publishers(:valid)
    @invalid = publishers(:invalid)
  end

  test "valid publisher" do
    assert @valid.valid?
  end

  test "should be invalid without name" do
    refute @invalid.valid?
  end

end
