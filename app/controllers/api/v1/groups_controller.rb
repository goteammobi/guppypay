module Api
  module V1
    class GroupsController < ApplicationController
      respond_to :json

      def users_in_group
        group = Group.find_by_id(params[:group_id])

        render json: {
          users: group.users
        }
      end

      #Removes user from the specified group
      def remove_user
        if (User.find_by_id(params[:user_id]) == nil)
          render json: {
            message: "User not in group"
          }
        else
          User.find_by_id(params[:user_id]).destroy
          render json: {
            message: "Removed user from group"
          }
        end
      end

      #Adds user into the specified group
      def add_user
        if (Group.find_by_id(params[:group_id]) == nil)
          render json: {
            message: "Invalid group id"
          }

        elsif (User.find_by_id(params[:user_id]) == nil)
          render json: {
            message: "Invalid user id"
          }

        elsif (Grouping.where(group_id: params[:group_id], user_id: params[:user_id]))
          render json: {
            message: "Group id and user id are already grouped together"
          }

        else
          group = Grouping.create(group_id: params[:group_id], user_id: params[:user_id])

          render json: {
            status: "SUCCESS",
            message: group 
          }
        end
      end
    end
  end
end