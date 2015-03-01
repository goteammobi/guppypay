module Api
  module V1
    class VenmoController < ApplicationController
      respond_to :json

      def friends
        url = "https://api.venmo.com/v1/users/" + "145434160922624933" + "/friends?access_token=" + "DtepCPxqBBrZRbbQa2ATwfye4aPLxGu3" + "&limit=50"

        request = Typhoeus.get(url)
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

      def charge_group
        url = "https://api.venmo.com/v1/payments"

        @group = Group.find_by_id(params["group_id"])

        amount_total = params["amount"]
        amount_divided = (amount_total * 1.0 / @group.users.count).ceil

        response_body = { charges: [] }

        for paymate in @group.users
          body = {
            access_token: current_user.auth_token,
            user_id: paymate.venmo_id,
            note: params["note"],
            amount: "-" + amount_divided,
            audience: params["audience"]
          }

          request = Typhoeus.post(url, body: body)
          response = JSON.parse(request.response_body)

          response_body["charges"].push(response);
        end

        render json: response_body
      end
    end
  end
end