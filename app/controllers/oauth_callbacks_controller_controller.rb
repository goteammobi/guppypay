class OauthCallbacksControllerController < ApplicationController
  def oauth
    redirect_to("https://www.google.com")
  end
end
