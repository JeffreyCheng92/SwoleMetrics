Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#root'
  get '*path' => 'static_pages#root'
end
