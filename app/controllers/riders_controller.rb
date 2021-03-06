class RidersController < ApplicationController

  def index
    @riders = Rider.all
  end

  def locations
    @riders = Rider.all
    render json: @riders, only: [:id, :first_name, :last_name, :latitude, :longitude] 
  end

  def show
    @rider = Rider.find(params[:id])
  end

  def new
    if user_signed_in?
      @rider = Rider.new
    else
      redirect_to riders_path
    end
  end

  def edit
    if user_signed_in?
      @rider = Rider.find(params[:id])
    else
      redirect_to riders_path
    end
  end
    
  def create
    @rider = Rider.new(rider_params)

    if @rider.save
      redirect_to @rider
    else
      render 'new'
    end
  end

  def update
    @rider = Rider.find(params[:id])

    if @rider.update(rider_params)
      redirect_to @rider
    else
      render 'edit'
    end  
  end

  def destroy
    @rider = Rider.find(params[:id])
    @rider.destroy

    redirect_to riders_path
  end

  private
    def rider_params
      params.require(:rider).permit(:first_name, :last_name, :city, :latitude, :longitude)
    end
end
