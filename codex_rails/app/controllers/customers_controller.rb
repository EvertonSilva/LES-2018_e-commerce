class CustomersController < ApplicationController
  def index
    render :json Customer.all
  end

  def create
    customer = Customer.new(customer_params)
    if customer.save
      render json: customer
    else
      render_error(customer, :unprocessable_entity)
    end
  end

  def update
  end

  private
    def customer_params
      serializer_params(params)
    end
end
