class Rider < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :city, presence: true
end
