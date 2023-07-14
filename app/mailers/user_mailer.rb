# frozen_string_literal: true

class UserMailer < ApplicationMailer
  def confirmation_notify
    @user=params
    mail(to: @user.email, subject: 'Confirmation Email Varification')
  end
end
