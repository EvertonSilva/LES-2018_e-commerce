class Author < ApplicationRecord

  has_many :books
  has_paper_trail   # enable audit support
end
