# frozen_string_literal: true

module Api
  module V1
    class AuthenticationController < ApplicationController
      before_action :authorize_request, except: :login

      def registration
        @user = User.new(user_params)
        if @user.save
          render json: { success: 'Confirmation email send' }, status: :ok
        else
          render json: { error: @user.error }, status: :unauthorized
        end
      end

      def login
        @user = User.find_by_email(params[:email])
        # if @user&.authenticate(params[:password])
      end

      private

      def user_params
        params.require(:users).permit(:first_name, :last_name, :email, :password)
      end

      def login_params
        params.permit(:email, :password)
      end
    end
  end
end
