require 'jwt'

module JsonWebToken
  extend ActiveSupport::Concern
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, exp: 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRERT_KEY)
  end

  def decode(token)
    decoded = JWT.decode(token, SECRERT_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
end
