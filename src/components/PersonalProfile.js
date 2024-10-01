import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="PersonalProfile">
        <h2>Personal Profile</h2>
        <div>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
