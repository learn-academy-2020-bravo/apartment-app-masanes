Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get '*path', to: 'home#root', constraints: ->(request){ request.format.html? }
  root to: 'home#root'
end

# This route directs all HTML traffic to the 'home#root' route, but ignores non HTML traffic, like our API requests will be. That is perfect to interact with the React router eventually if and when that gets added to your app.

