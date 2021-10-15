Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      get 'random-greeting', to: 'messages#greet'
    end
    get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  end
  root "static#index"
end
