Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root" 
  # resource posts
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] 
    resources :posts, only: [:create, :show, :index, :update, :destroy] do 
      resources :comments, only: [:index]
    end 
    resources :comments, only: [:create, :show, :update, :destroy]
    resources :likes, only: [:create, :destroy]


    post 'friend_requests/:requestee_id', to: 'friend_requests#create', as: 'friend_requests'
    delete 'friend_requests/:requester_id/:requestee_id', to: 'friend_requests#destroy', as: 'friend_request'
    
    post 'friendships', to: 'friendships#create', as: 'friendships'
    delete 'friendships', to: 'friendships#destroy', as: 'friendship'

    resource :session, only: [:create, :destroy]
  end 
end
