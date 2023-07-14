class AuthToken < ApplicationRecord
  belongs_to :user
  def create_or_update_token!
    self.token_expires_at = 24.hours.from_now
    self.last_active_at = Time.now
    save!
  end

  def token_valid?
    token_expires_at > Time.now
  end
end
