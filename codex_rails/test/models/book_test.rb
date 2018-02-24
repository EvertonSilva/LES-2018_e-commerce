require 'test_helper'

class BookTest < ActiveSupport::TestCase
  def setup
    @book = books(:valid) # load data from test/fixtures/books.yml
  end

  test "valid book" do
    assert @book.valid?, "#{@book.errors.first}"
  end

end
