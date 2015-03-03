class OauthCallbacksController < ApplicationController
  respond_to :json

  def oauth
    url = "https://api.venmo.com/v1/oauth/access_token"
    body = {
      client_id: ENV["VENMO_CLIENT_ID"],
      client_secret: ENV["VENMO_SECRET_ID"],
      code: params["code"]
    }
    request = Typhoeus.post(url, body: body)
    response = JSON.parse(request.response_body)
    puts response

    @user = User.find_by_email(response["user"]["email"])
    if @user
      puts "hereeeee"
      @user.update_auth_token(response["access_token"])
    else
      puts "thereeee"
      @user = User.create({
        email: response["user"]["email"],
        password: "asdfasdf",
        password_confirmation: "asdfasdf",
        venmo_id: response["user"]["id"],
        auth_token: response["access_token"]
      })
    end
    sign_in(@user)
    redirect_to root_path + "#/groups"
  end
end
