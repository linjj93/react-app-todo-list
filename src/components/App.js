import React from "react";
import Task from "./Task";
import Input from "./Input";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: "1", desc: "buy milk" },
        { id: "2", desc: "eat dinner" },
        { id: "3", desc: "nail javascript" },
        { id: "4", desc: "give feedback" }
      ]
    };
  }

  addTask() {
    const inputBox = document.querySelector("input");
    const taskToAdd = inputBox.value;
    if (taskToAdd.trim() !== "") {
      const nextId = (
        parseInt(this.state.tasks[this.state.tasks.length - 1]["id"]) + 1
      ).toString();
      const newTask = { id: nextId, desc: taskToAdd };

      this.setState(state => ({
        tasks: [...state.tasks, newTask]
      }));
      inputBox.value = null;
    } else {
      alert("Missing Information!");
    }
  }

  keyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.addTask();
    }
  }

  render() {
    const taskList = this.state.tasks.map(taskObj => {
      return <Task key={taskObj.id} desc={taskObj.desc} />;
    });

    return (
      <React.Fragment>
        <ul>{taskList}</ul>
        <Input
          onClick={this.addTask.bind(this)}
          onKeyDown={this.keyDown.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default App;
