import React from "react";
import "../styles/Task.css";

// function Task(props) {
//   return <li onClick={props.onClick}>{props.desc}</li>;
// }

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleared: ""
    };
  }

  toggleDone() {
    if (this.state.cleared === "done") {
      this.setState({
        cleared: ""
      });
    } else {
      this.setState({
        cleared: "done"
      });
    }
  }

  render() {
    return (
      <li className={this.state.cleared} onClick={this.toggleDone.bind(this)}>
        {this.props.desc}
      </li>
    );
  }
}

export default Task;
