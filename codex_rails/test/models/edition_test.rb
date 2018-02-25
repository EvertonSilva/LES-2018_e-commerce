require 'test_helper'

class EditionTest < ActiveSupport::TestCase
  def setup
    @valid_edition = editions(:test_edition)
    @invalid_edition = editions(:two)
  end

  # validations
  test "valid edition" do
    assert @valid_edition.valid?, "#{@valid_edition.errors.each { |e| e }}"
  end

  test "invalid edition" do
    refute @invalid_edition.valid?, "this edition should not be valid"
  end
end
