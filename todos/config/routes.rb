Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: [:new, :edit], defaults: { format: :json }
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
