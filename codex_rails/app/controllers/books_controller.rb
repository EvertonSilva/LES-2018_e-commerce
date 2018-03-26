class BooksController < ApplicationController
  before_action :set_book, only: [:update]

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

    unless @editions.nil? or @editions.empty?
      book_attr[:editions] = @editions.map { |e| Edition.new(e) }
    end

    if @book.update_attributes(book_attr)
      render json: @book
    else
      render_error(@book, :unprocessable_entity)
    end
  end

  private
    def book_params
      @editions = params[:data][:relationships][:editions][:data]
      ActiveModelSerializers::Deserialization.jsonapi_parse(params)
    end

    def set_user
      begin
        @book = Book.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        book = Book.new
        book.errors.add(:id, "ID not found")
        render_error(book, 404) and return
      end
    end
end
