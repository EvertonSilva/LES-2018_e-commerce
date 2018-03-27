class AuthorsController < ApplicationController
  before_action :set_author, only: [:update, :show]

  def index
    render json: Author.all
  end

  def show
    render json: @author
  end

  private
    def set_author
      begin
        @author = Author.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        author = Author.new
        author.errors.add(:id, "ID not found")
        render_error(author, 404) and return
      end
    end
end
