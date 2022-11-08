class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :last_name, :age, :gender, :level
end
