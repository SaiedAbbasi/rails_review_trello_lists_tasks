class ListsController < ApplicationController
  skip_before_action :verify_authenticity_token

def index
    @lists = List.all
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(title: params[:title])
    if @list.save
      render json: {title: @list.title, id: @list.id, all_lists: @list.optionEl}
    else 
      render new_list
    end
  end

  def show
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(list_params[:id])
    @list.update(list_params)
  end

  def destroy
    @list = List.find(list_params[:id])
    @list.delete
  end

  
  private

    def list_params
      params.require(:list).permit(:title)
    end

end