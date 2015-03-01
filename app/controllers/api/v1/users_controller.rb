module Api
  module V1
    class UsersController < ApplicationController
      respond_to :json

      def groups_in_user
        user = User.find_by_id(params[:user_id])

        render json: {
          groups: user.groups
        }
      end

      def remove_group

      end

      def add_group

      end
    end
  end
end