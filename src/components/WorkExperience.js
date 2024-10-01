import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="PersonalProfile">
        <h2>Work Experience</h2>
        <div>
          {this.props.jobs.map((job) => (
            <div>
              <h3>{job.title} at {job.company} ({job.start} - {job.end})</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
