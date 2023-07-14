# Load the Rails application.
require_relative 'application'
ActionMailer::Base.default content_type: 'text/plain'
# Initialize the Rails application.
Rails.application.initialize!

# Rails.application.configure do
#   # config.action_mailer.default_url_options = { :host => 'portal.herokuapp.com' }
#   config.action_mailer.delivery_method = :smtp
#   config.action_mailer.smtp_settings = {
#     address: 'smtp.gmail.com',
#     port: 587,
#     domain: 'gmail.com',
#     user_name: ENV['SENDER_MAIL_ADDRESS'],
#     password: ENV['SENDER_MAIL_PASSWORD'],
#     authentication: 'login',
#     enable_starttls_auto: true
#   }
# end
