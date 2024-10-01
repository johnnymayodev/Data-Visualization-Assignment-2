import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="Education">
        <h2>Education</h2>
        <div>
          {this.props.education.map((edu) => (
            <div>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <p>{edu.start} - {edu.end}</p>
                <p>GPA: {edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
