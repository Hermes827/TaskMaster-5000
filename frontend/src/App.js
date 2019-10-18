import React from 'react';
import logo from './logo.svg';
import './App.css';
import taskMaster from './pictures/taskMaster.jpg'
import TaskHolder from './containers/taskHolder.js'
import CreateTask from './containers/createTask.js'

const API = "http://localhost:3000/api/v1/tasks"

class App extends React.Component {

constructor(props){
  super(props)
  this.state = {
    tasks: []
  }

}

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        tasks: data
      })
    })
  }

  rerenderTasks = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        tasks: data
      })
    })
  }


  render(){

    const {tasks} = this.state

  return (
    <div className="App">
    <h1>Welcome to TaskMaster-5000</h1>

    <TaskHolder tasks={tasks}
      rerenderTasks={this.rerenderTasks}
       />
    <CreateTask/>
    </div>
  );
}
}

export default App;
