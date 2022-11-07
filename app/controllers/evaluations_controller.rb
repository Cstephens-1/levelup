class EvaluationsController < ApplicationController
    skip_before_action :confirm_authentication
  
    def index
      evaluations = Evaluation.all 
      render json: evaluations
    end
end
