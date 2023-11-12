# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_secure_token :confirmation_token

  # mount_uploader :avatar, AvatarUploader
  # validates :first_name, :presence => true, :length => { :in => 3..20 }
  # validates :last_name, :presence => true, :length => { :in => 3..20 }
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :username, presence: true, uniqueness: true
  # validates :password,  length: { minimum: 6 }, if: -> { new_record? || !password.nil? }

  before_create :generate_confirmation_token
  after_create :send_confirmation_email
  has_many :posts, dependent: :destroy

  # Token valide for 1 days
  def valid_confimation_token?
    (Time.parse(confirmation_sent_at.to_s) + 24.hours) > Time.now
  end

  def token_confirmed!
    self.confirmed_at = Time.now
    self.is_activated = true
    save
  end

  def confirm?
    is_activated?
  end

  private

  def generate_confirmation_token
    return confirmation_token if !!confirmation_token.blank? && valid_confimation_token?

    self.confirmation_token = SecureRandom.urlsafe_base64(128).to_s
    self.confirmation_sent_at = Time.now
  end

  def send_confirmation_email
    SendConfirmationInstructionJob.perform_now(self)
  end
end
