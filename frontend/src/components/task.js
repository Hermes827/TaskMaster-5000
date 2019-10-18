import React from 'react';

const API = "http://localhost:3000/api/v1/tasks"


class Task extends React.Component {

//   constructor(){
//     super()
//     this.state = {
//
//     }
//   }
//
//
deleteTask(){
  console.log(this.props.task.id)
    fetch(API + '/' + this.props.task.id, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    this.props.rerenderTasks()
    // document.getElementsByClassName('task').classlist.add('disappear')
  }

sayHello = () => {
  console.log("hello")
}

  render(){
  return (
    <div className="task" onClick={()=> this.sayHello()}>
    <h1>{this.props.task.title}</h1>
    <h1>{this.props.task.content}</h1>
    {console.log(this.props.task.id)}
    <button>Edit Entry</button>
    <button onClick={()=> this.deleteTask()}>Delete Entry</button>
    </div>
  );
}
}

export default Task;
