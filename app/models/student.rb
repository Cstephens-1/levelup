class Student < ApplicationRecord
    has_many :evaluations
    has_many :skills, through: :evaluations
    has_many :class_students
    has_many :gym_classes, through: :class_students
end
