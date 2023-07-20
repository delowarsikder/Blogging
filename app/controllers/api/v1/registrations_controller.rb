# frozen_string_literal: true

module Api
  module V1
    class RegistrationsController < ApplicationController
      skip_before_action :authenticate_user, only: %i[create confirm_email]
      def create
        @user = User.new(user_params)
        if @user.save
          # UserMailer.with(user: @user).confirmation_notify.deliver_now
          render json: { message: 'Confirmation email send' }, status: :created
        else
          render json: { error: @user.errors.messages.map do |msg, desc|
                                  msg.to_s + ' ' + desc[0]
                                end.join(', ') }, status: :unauthorized
        end
      end

      # Delete user ( Delete Your Account )
      def destroy
        @user = User.find(params[:id])
        if @user.destroy
          render json: { success: 'Successfully deleted' }, status: :ok
        else
          render json: { error: 'Something went wrong' }, status: :not_found
        end
      end

      # Confirm email address
      def confirm_email
        token = params[:token]
        user = User.find_by(confirmation_token: token)
        if user && user&.valid_confimation_token?
          user.token_confirmed!
          render json: { success: true, message: 'User confirmed successfully' }, status: :created
        elsif user.confirm?
          render json: { success: true, message: 'User already confirmed' }, status: :created
        else
          render json: { error: 'Invalid token' }, status: :not_found
        end
      end

      private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
      end
    end
  end
end
