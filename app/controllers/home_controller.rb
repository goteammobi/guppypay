class HomeController < ApplicationController
  def index
    url = "https://api.venmo.com/v1/oauth/authorize?client_id=2408&scope=make_payments%20access_profile%20access_email%20access_phone%20access_balance&response_type=code"
    redirect_to(url)
    # request = Typhoeus.get("https://api.venmo.com/v1/oauth/authorize?client_id=2406&scope=make_payments%20access_profile%20access_email%20access_phone%20access_balance&response_type=code", followlocation: true)
  end
end
