Rails.application.routes.draw do
  get 'publishers', to: 'publishers#index'
  get 'publishers/:id', to: 'publishers#show'

  resources :books do
    resources :editions
  end
  resources :authors
end
