class Skill < ApplicationRecord
    has_many :evaluations
    has_many :students, through: :evaluations
end
