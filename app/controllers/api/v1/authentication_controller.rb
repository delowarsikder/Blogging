# frozen_string_literal: true

module Api
  module V1
    class AuthenticationController < ApplicationController
      skip_before_action :authenticate_user, only: %i[login]
      # Login user into application
      def login
        param = params[:user]
        @user = User.find_by_email(param[:email].downcase)
        if @user && @user.authenticate(param[:password]) # User exist and check password is match
          if @user.confirm? # Check verify email address or not
            token = JsonWebTokenService.encode({ email: @user.email })
            time = Time.now + 1.hours
            render json: { success: true, auth_token: token, token_expiration: time.strftime('%m-%d-%Y %H:%M:%S'), user: @user },
                   status: :ok
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
