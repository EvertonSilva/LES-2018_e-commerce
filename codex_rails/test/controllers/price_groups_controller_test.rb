require 'test_helper'

class PriceGroupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get price_groups_index_url
    assert_response :success
  end

  test "should get show" do
    get price_groups_show_url
    assert_response :success
  end

end
