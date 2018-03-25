class BooksController < ApplicationController

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
    @book = Book.find(params[:id])

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
end
