# frozen_string_literal: true

module Api
  module V1
    class AuthenticationController < ApplicationController

      # Login user into application

      def login
        @user = User.find_by_email(params[:email])
        if @user && @user.authenticate(params[:password]) # User exist and check password is match
          if @user.confirm? # Check verify email address or not
            token = JsonWebTokenService.encode({ email: @user.email })
            render json: { auth_token: token }
          else
            render json: { error: 'Please verify email address' }, status: :unauthorized
          end
        else
          render json: { error: 'Incorrect Email Or password' }, status: :unauthorized
        end
      end

      # Log out user from application
      def destroy
        render json: { current_user: }
      end

      private

      def login_params
        params.permit(:email, :password)
      end
    end
  end
end
