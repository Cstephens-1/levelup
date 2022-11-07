class ClassStudentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :gym_class
  has_one :student
end
