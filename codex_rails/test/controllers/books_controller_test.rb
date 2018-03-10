require 'test_helper'

class BooksControllerTest < ActionDispatch::IntegrationTest

  def setup
    @books_list = [books(:one), books(:two), books(:three)]
    @books_list.each { |book| book.save }
  end

  def teardown
    @books_list.each { |book| book.destroy }
  end

  test "end point GET /books" do
    get books_url, as: :json
    assert_response :success
  end

  test "return json with all books" do
    get books_url, as: :json
    payload = JSON.parse(response.body)
    puts payload.class
    assert_equal 5, payload.count
  end

end
