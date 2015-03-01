require 'test_helper'

class OauthCallbacksControllerControllerTest < ActionController::TestCase
  test "should get oauth" do
    get :oauth
    assert_response :success
  end

end
