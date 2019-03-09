import React, { Component } from 'react';
import NavBar from './NavBar'
import './WebGraderApp.css';

class WebGraderApp extends Component {

  constructor(props) {
    super(props);
    this.PROGRAM_STATE = "loggedOut"
  }

  render() {
    return (
      <div className="WebGraderApp">
        <div className="header">
          <h1>UNL Web Grader</h1>
        </div>
        <NavBar isLoggedIn={this.PROGRAM_STATE !== "loggedOut"}/>
      </div>
    );
  }
}

export default WebGraderApp;
