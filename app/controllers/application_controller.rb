class ApplicationController < ActionController::API
  doorkeeper_for :all
  before_action :authenticate_user!

private
  def current_user
    if doorkeeper_token
      @current_user ||= User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token.resource_owner_id
    end
  end

  def require_user
    unless current_user
      render json: { error: 'Access requires user token', error_description: 'You will need to provide a valid user token to access this resource.' }, status: :unauthorized
    end
  end
end
