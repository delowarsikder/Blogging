module AuthenticateHelper
  def authenticate_user
    email = JsonWebTokenService.decode(request.headers['HTTP_AUTH_TOKEN'])['email']
    puts '######################'
    puts email
    puts '!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    @current_user = User.find_by_email(email)
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def user_sign_in?
    !!current_user
  end

  def current_user
    @current_user
  end
end
