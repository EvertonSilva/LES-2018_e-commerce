class BooksController < ApplicationController
  def index
    @books = Book.all
    render json:  @books
  end

  def create
    book_attr = book_params
    edition_attr = book_attr.delete("editions")
    @book = Book.new(book_attr)
    @book.editions = edition_attr.map { |edt| Edition.new(edt) }

    if @book.save
      resp = { id: @book.id, status: :ok }
    else
      resp = { errors: @book.errors, status: :unprocessable_entity }
    end

    render json: resp.to_json
  end

  def update
    @book = Book.find(params[:id])
    book_attr = book_params
    edition_attr = book_attr.delete("editions")

    unless edition_attr.nil? 
      book_attr[:editions] = edition_attr.map { |edt| Edition.new(edt) }
    end

    if @book.update(book_attr)
      resp = { status: :ok }
    else
      resp = { errors: @book.errors, status: :unprocessable_entity }
    end

    render json: resp.to_json
  end

  private
    def book_params
      params.require(:book).permit(:title, :isbn, :barcode, :status, :synopsis,
                                   :author_id, :price_group_id,
                                   :editions => [:publish_year, :page_numbers, :width, :height, :weight, :depth, :publisher_id])
    end
end
