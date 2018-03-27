class PriceGroupsController < ApplicationController
  before_action :set_price_group, only: [:show]
  
  def index
    render json: PriceGroup.all
  end

  def show
    render json: @price_group
  end

  private
  def set_price_group
    @price_group = PriceGroup.find params[:id]
  end
end
