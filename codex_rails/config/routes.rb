Rails.application.routes.draw do
  get 'publishers', to: 'publishers#index'
  get 'publishers/:id', to: 'publishers#show'
  get 'categories', to: 'categories#index'
  get 'categories/:id', to: 'categories#show'

  resources :books do
    resources :editions
  end
  resources :authors
end
