class TimeController < ApplicationController
  def index
    time = Time.now
    render json: time.to_f * 1000
  end  
end
