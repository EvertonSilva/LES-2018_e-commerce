require 'test_helper'

class BookRequestsTest < ActionDispatch::IntegrationTest

  test "end point GET /books" do
    get books_url, as: :json
    assert_response :success
  end
end
