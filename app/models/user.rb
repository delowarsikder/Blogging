class User < ApplicationRecord
  has_secure_password
  # mount_uploader :avatar, AvatarUploader
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :username, presence: true, uniqueness: true
  # validates :password,
  #           length: { minimum: 6 },
  #           if: -> { new_record? || !password.nil? }
  before_create :generate_confirmation_token
  after_create :send_confirmation_email

  private

  def generate_confirmation_token
    self.confirmation_token = SecureRandom.hex(10)
    self.confirmation_sent_at = Time.now
  end

  def send_confirmation_email
    SendConfirmationInstructionJob.perform_now(confirmation_token)
  end

end

