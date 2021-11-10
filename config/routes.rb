Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # rails routes
  get '/dashboard' => 'dashboard#index'

  # React routes handling
  namespace :v2 do
    get '/' => 'home#index'
    get '/*path' => 'home#index'
  end

  root 'v2/home#index'
end
