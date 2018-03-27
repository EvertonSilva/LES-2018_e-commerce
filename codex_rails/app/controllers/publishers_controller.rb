class PublishersController < ApplicationController
  before_action :set_publisher, only: [:show]

  def index
    render json: Publisher.all
  end

  def show
    render json: @publisher
  end

  private
  def set_publisher
    @publisher = Publisher.find params[:id]
  end
end
