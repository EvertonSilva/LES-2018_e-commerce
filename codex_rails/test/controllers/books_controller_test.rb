require 'test_helper'

class BooksControllerTest < ActionDispatch::IntegrationTest

  def setup
    @content_type = 'application/json'
  end

  def teardown
  end

  test "end point GET /books" do
    get books_url
    assert_response :success
  end

  test "Should get valid list of books" do
    get books_url
    payload = JSON.parse(response.body)
    assert_equal @content_type, response.content_type
    assert_equal 6, payload['data'].count
  end

end
