class UsersController < ApplicationController
  before_action :authenticate_user!

  # def index
  #   @user = User.all
  # end
  #
  # def new
  #   @user = User.new
  # end

  def show
    fail
    @user = current_user
    render json: @user, status: 200
  end

  def create
    @user = User.new(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:email,:password)
  end
end
