class BooksController < ApplicationController
  before_action :set_editions, only: [:create]
  before_action :set_book, :check_status_change, only: [:update]
  after_action :save_status_change, only: [:update]

  def index
    @books = Book.all
    render json:  @books
  end

  def create
    book = Book.new(book_params)
    book.editions.build(@editions)
    if book.save
      render json: book
    else
      render_error(book, :unprocessable_entity)
    end
  end

  def update
    if @book.update_attributes(book_params)
      render json: @book
    else
      render_error(@book, :unprocessable_entity)
    end
  end

  private
    def book_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params)
    end

    def set_book
      begin
        @book = Book.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        book = Book.new
        book.errors.add(:id, "ID not found")
        render_error(book, 404) and return
      end
    end

    def set_editions
      params.permit!
      @editions = params[:data][:relationships][:editions][:data]
    end

    def check_status_change
      debug_message "Store current status"
      @status_before_update = nil
      if @book.enabled != params[:data][:attributes][:enabled]
        # status changed
        # store current status
        @status_before_update = @book.enabled
      end
    end

    def save_status_change
      debug_message "Save status change"
      unless @status_before_update.nil?
        begin
          params.permit!
          chg = params[:data][:relationships][:status_changes][:data]
          debug_message "Params chg :: #{chg}"
          StatusChange.create(chg)
        rescue Exception => e
          debug_message "Error: #{e.message}"
          @book.enabled = @status_before_update
          @book.save
        end
      end
    end

    def debug_message(message)
      Rails.logger.debug "\n\n DEBUG: #{message} \n\n"
    end
end
