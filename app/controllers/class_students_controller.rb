class ClassStudentsController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      class_student = ClassStudent.all 
      render json: class_student
    end
end
