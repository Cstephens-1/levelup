class EvaluationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :student
  has_one :skill
end
