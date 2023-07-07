# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  # mount_uploader :avatar, AvatarUploader
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :username, presence: true, uniqueness: true
  # validates :password,  length: { minimum: 6 }, if: -> { new_record? || !password.nil? }

  before_create :generate_confirmation_token
  after_create :send_confirmation_email
  def valid_confimation_token?
    # Token valide for 1 days
    (confirmation_sent_at.to_time + 1.days) > Time.now
  end

  def token_confirmed!
    self.confirmation_token = nil
    self.confirmed_at = Time.now
    save
  end

  def confirm?
    confirmed_at?
  end

  private

  def generate_confirmation_token
    self.confirmation_token = SecureRandom.hex(10)
    self.confirmation_sent_at = Time.now
  end

  def send_confirmation_email
    SendConfirmationInstructionJob.perform_now(confirmation_token)
  end
end
