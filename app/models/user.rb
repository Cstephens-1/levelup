class User < ApplicationRecord

    has_secure_password
    has_many :gym_classes
end
