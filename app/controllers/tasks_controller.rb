class TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @tasks = Task.all
  end

  def new
    @list = List.find(params[:list_id])
    @task = @list.tasks.build
  end

  def create
    @list = List.find(params[:task_list_id])
    @task = @list.tasks.build(description: task_params[:description], priority: task_params[:priority])
    if @list.save
      render json: {html: 'hi'}
    else 
      render new
    end
  end

  def show
    @task = Task.find(task_params[:id])
  end

  def update
    @task = Task.find(task_params[:id])
    @task.update(task_params)
  end

  def destroy
    @task = Task.find(task_params[:id])
    @task.delete
  end

  
  private

    def task_params
      params.permit(:description, :priority, :task_list_id)
    end

end
