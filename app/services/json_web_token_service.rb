require 'jwt'
class JsonWebTokenService
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRERT_KEY, algorithm: 'HS256')[0]
    HashWithIndifferentAccess.new decoded
  end
end

