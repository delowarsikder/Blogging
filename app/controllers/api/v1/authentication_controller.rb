# frozen_string_literal: true

class Api::V1::AuthenticationController < ApplicationController
  before_action :check_basic_auth
  skip_before_action :verify_authenticity_token

  private

  # Only allow a list of trusted parameters through.
  def user_registration_params
    params.require(:user).permit(:first_name,:last_name,:email, :password)
  end

  def check_basic_auth
    unless request.authorization.present?
      head :unauthorized
      return
    end
    authenticate_with_http_basic do |email, password|
      user = User.find_by(email: email.downcase)
      if user && user.authenticate(password)
        @current_user = user
      else
        head :unauthorized
      end
    end
  end

  attr_reader :current_user
end
