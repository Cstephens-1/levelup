class GymClass < ApplicationRecord
  belongs_to :user 
  has_many :class_students 
  has_many :students, through: :gym_classes
end
