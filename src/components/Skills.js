import "./Skills.css";
import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <h2>Key Skills</h2>
        <ul>
          {this.props.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
