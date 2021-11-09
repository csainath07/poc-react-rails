Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # rails routes
  get '/dashboard' => 'dashboard#index'

  namespace :v2 do
    get '/' => 'home#index'
    get '/*path' => 'home#index'
  end

  # React routes handling
  root 'v2/home#index'
end
