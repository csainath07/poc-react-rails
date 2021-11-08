Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # rails routes
  get '/dashboard' => 'dashboard#index'
  # React routes handling
  root 'home#index'
  get '/*path' => 'home#index'
end
