class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(params[:id])
    render json: { user: { user_id: @user.id,
                           email: @user.email },
                   exercises: @user.exercises }, status: 200
  end

  def create
    @user = User.new(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:email,:password)
  end
end
