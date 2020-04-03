Rails.application.routes.draw do
  get 'map/index'
  get 'photo/index'

  get 'home/index'

  resources :riders
  
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
