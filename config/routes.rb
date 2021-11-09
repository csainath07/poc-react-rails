Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # rails routes
  get '/dashboard' => 'dashboard#index'

  namespace :react do
    get '/' => 'home#index'
    get '/*path' => 'home#index'
  end

  # React routes handling
  root 'react/home#index'
end
