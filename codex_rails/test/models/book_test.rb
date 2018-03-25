require 'test_helper'

class BookTest < ActiveSupport::TestCase
  def setup
    @book = books(:book_0)
  end

  test "valid book" do
    @book.editions.build(JSON.parse editions(:test_edition).to_json)
    assert @book.valid?, "#{@book.errors.first}"
  end

end
