class Submission < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :slogan, presence: true, length: {minimum:5, maximum:50}
end
