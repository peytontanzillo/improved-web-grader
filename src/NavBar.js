import React, { Component } from 'react';
import './NavBar.css';
import NavItem from './NavItem'

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <NavItem name="TestItem"/>
        <NavItem name="TestItem2"/>
        <NavItem name="whathappensifthisendsuplong?"/>
      </div>
    );
  }
}

export default NavBar;
