Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root 'posts#index'
  root to: 'api/v1/posts#index'
  namespace :api do
    namespace :v1 do
      resources :posts
    end

    namespace :v2 do
    end
  end
end
