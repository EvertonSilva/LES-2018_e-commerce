class EditionsController < ApplicationController
  before_action :set_edition, only: [:show, :update]
  def index
    render json: Edition.all
  end

  def show
    render json: @edition
  end

  private
  def set_edition
    @edition = Edition.find params[:id]
  end

  def edition_params
    serializer_params(params)
  end
end
