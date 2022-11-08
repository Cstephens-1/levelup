class StudentsController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      students = Student.all 
      render json: students
    end

    def create()
        student = Student.create(last_name: params[:last_name], name: params[:name], gender: params[:gender], level: params[:level])
        render json: student
    end


    def student_params 
        params.permit(:last_name, :name, :gender, :level)
    end
end


