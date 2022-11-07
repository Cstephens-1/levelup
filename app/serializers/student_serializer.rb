class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :level
end
