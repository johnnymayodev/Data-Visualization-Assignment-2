import "./Header.css";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="name">
          <h1>{this.props.name}</h1>
          <span>{this.props.job}</span>
        </div>
        <div className="info">
          <span>
            Email: <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
          </span>
          <span>Web: {this.props.web}</span>
          <span>Mobile: {this.props.phone}</span>
        </div>
      </div>
    );
  }
}

export default Header;
