Rails.application.routes.draw do
  get 'publishers', to: 'publishers#index'
  get 'publishers/:id', to: 'publishers#show'
  get 'categories', to: 'categories#index'
  get 'categories/:id', to: 'categories#show'
  get 'price_groups', to: 'price_groups#index'
  get 'price_groups/:id', to: 'price_groups#show'

  resources :books
  resources :authors
  resources :customers do
    resources :credit_cards, shallow: true
    resources :addresses, shallow: true
  end
end
