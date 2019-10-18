import React, { Component } from 'react'
import Task from '../components/task.js'

class TaskHolder extends Component {

  render(){
    return (
    <div>
    <h1>View Tasks</h1>
    {console.log(this.props.tasks)}
    {this.props.tasks.map((task)=>{
      return <Task
          task={task}
          rerenderTasks={this.props.rerenderTasks}
          />
    })}
    {console.log(this.props)}
    </div>
    )
  }
}

export default TaskHolder
