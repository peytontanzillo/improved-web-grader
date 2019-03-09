import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
  render() {
    return (
      <div className="NavItem">
        {this.props.name}
      </div>
    );
  }
}

export default NavItem;
