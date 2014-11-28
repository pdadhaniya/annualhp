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

  def update
    @user = User.find(params[:id])
    respond_to do |format|
      if @user.update(user_params)
        format.json { render :show}
      else
        format.json { render json: @user.errors}
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :full_name, :email, :image_url, :google_uid, :rsvp, :potluck, :created_at, :updated_at)
  end
end
