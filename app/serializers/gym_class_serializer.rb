class GymClassSerializer < ActiveModel::Serializer
  attributes :id, :level, :time
  has_one :user
end
