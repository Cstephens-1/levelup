class SkillsController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      skills = Skill.all 
      render json: skills
    end

    def create
      skill = Skill.create(name: params[:name], weight: params[:weight])
      render json: skill
  end

  def destroy
    skill = Skill.find_by(id: params[:id])
    skill.destroy
    head :no_content
end
    
end
