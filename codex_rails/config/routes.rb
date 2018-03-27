Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :books
  get 'authors/:id', to: 'authors#show'
  get 'authors/', to: 'authors#index'
end
