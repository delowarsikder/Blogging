Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root 'posts#index'
  root to: 'api/v1/posts#index'
  namespace :api do
    namespace :v1 do
      resources :posts
      post '/auth/registration', to: 'authentication#registration'
      post '/auth/login', to: 'authentication#login'
      # get '/auth/logout', to: 'authentication#logout'
      get '/test', to: 'authentication#test'
      # post '/auth/prompt_reset_password', to: 'authentication#prompt_reset_password'
      # post '/auth/reset_user_password', to: 'authentication#reset_user_password'
    end

    namespace :v2 do
    end
  end
end
