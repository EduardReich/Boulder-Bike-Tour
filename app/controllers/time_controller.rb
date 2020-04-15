class TimeController < ApplicationController
  def index
    time = Time.now
    render json: time
  end  
end
