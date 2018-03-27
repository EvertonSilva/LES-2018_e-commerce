Rails.application.routes.draw do
  get 'publishers', to: 'publishers#index'
  get 'publishers/:id', to: 'publishers#show'
  get 'categories', to: 'categories#index'
  get 'categories/:id', to: 'categories#show'
  get 'price_groups', to: 'price_gropus#index'
  get 'price_groups/:id', to: 'price_gropus#show'

  resources :books do
    resources :editions
  end
  resources :authors
end
