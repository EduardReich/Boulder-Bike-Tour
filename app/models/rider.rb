class Rider < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :city, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
end
