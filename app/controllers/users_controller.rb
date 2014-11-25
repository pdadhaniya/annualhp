class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    if current_user
      render json: current_user
    end
  end
end
