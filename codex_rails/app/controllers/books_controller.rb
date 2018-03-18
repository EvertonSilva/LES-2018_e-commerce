class BooksController < ApplicationController
  def index
    @books = Book.all
    render json:  @books
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      response = { data: { id: @book.id, type: @book.class.name.downcase.pluralize } }
    else
      response = { errors: @book.errors }
    end

    render json: response.to_json
  end

  private
    def book_params
      params.require(:book).permit(:title, :isbn, :barcode, :status, :synopsis, :author_id, :price_group_id, :edition_id)
    end
end
