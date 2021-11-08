Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'assessments' => 'home#index'
  # get 'assessments/settings' => 'home#index'
  root 'home#index'
  get '/*path' => 'home#index'
end
