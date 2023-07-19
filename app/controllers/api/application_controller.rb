# frozen_string_literal: true

module Api
  class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
    include ActionController::MimeResponds
    include AuthenticateHelper
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
    before_action :authenticate_user
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception
    protect_from_forgery with: :null_session

    private

    def not_found
      render json: { error: 'not_found' }
    end

    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end

    def handle_bad_authentication
      render json: { message: 'Bad credentials' }, status: :unauthorized
    end

    def handle_not_found
      render json: { message: 'Record not found' }, status: :not_found
    end
  end
end
