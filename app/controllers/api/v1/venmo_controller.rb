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

      def charge
        url = "https://api.venmo.com/v1/payments"

        body = {
          access_token: current_user.auth_token,
          user_id: params["paymate_id"],
          note: params["note"],
          amount: "-" + params["amount"],
          audience: params["audience"]
        }

        request = Typhoeus.post(url, body: body)
        response = JSON.parse(request.response_body)

        render json: response
      end

      def pay
        url = "https://api.venmo.com/v1/payments"

        body = {
          access_token: current_user.auth_token,
          user_id: params["paymate_id"],
          note: params["note"],
          amount: params["amount"],
          audience: params["audience"]
        }

        request = Typhoeus.post(url, body: body)
        response = JSON.parse(request.response_body)

        render json: response
      end
    end
  end
end