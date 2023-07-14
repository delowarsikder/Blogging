class SendConfirmationInstructionJob < ApplicationJob
  queue_as :default
  def perform(*args)
    UserMailer.with(*args).confirmation_notify.deliver_now
  end
end
