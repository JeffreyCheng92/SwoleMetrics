Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#root'
  resources :users, only: :show
  get '*path' => 'static_pages#root'
end
