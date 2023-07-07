# frozen_string_literal: true

module Api
  class ApplicationController < ActionController::API
    include ActionController::MimeResponds
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    # protect_from_forgery with: :exception
    # protect_from_forgery with: :null_session #TO-Do uncomment
    include JsonWebToken
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
  end
end
