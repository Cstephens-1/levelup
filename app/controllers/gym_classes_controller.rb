class GymClassesController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      gym_classes = GymClasses.all 
      render json: gym_classes
    end
end
