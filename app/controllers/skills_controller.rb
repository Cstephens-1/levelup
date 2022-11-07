class SkillsController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      skills = Skill.all 
      render json: skills
    end
    
end
