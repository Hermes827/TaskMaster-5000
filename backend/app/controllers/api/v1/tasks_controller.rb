class Api::V1::TasksController < ApplicationController

def index
  @tasks = Task.all
  render json: @tasks
end

def show
  @task = Task.find(params[:id])
end

def destroy
   @task = Task.find(params[:id])
   @task.destroy
   render json: @task
 end

end
