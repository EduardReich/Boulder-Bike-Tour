Rails.application.routes.draw do
  resources :submissions
  devise_for :users
  get 'map/index'
  get 'photo/index'
  get 'time/index'
  get 'home/index'
  get '/riders/locations' => 'riders#locations'

  resources :riders
  
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
