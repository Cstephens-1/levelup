class StudentsController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      students = Student.all 
      render json: students
    end
end
