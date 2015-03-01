module Api
  module V1
    class VenmoController < ApplicationController
      respond_to :json

      def friends
        url = "https://api.venmo.com/v1/users/" + "1483040010272768557" + "/friends?access_token=" + current_user.auth_token + "&limit=50"

        request = Typhoeus.get(url)
        response = JSON.parse(request.response_body)

        render json: response
      end
    end
  end
end