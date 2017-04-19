import React, { Component } from 'react';
import './Workspace.css';

// Topics
import Palindrome from '../Topics/Palindrome';
import ReverseArray from '../Topics/ReverseArray';

class Workspace extends Component {
  render() {
    if ( !this.props.selectedTopic ) {
      return (
        <div id="workspace-component">
          <p id="workspace-header"> Workspace </p>
          <p> No topic selected </p>
        </div>
      )
    } 

    switch ( this.props.selectedTopic ) {
      case 'Palindrome.js':
        return (
          <div id="workspace-component">
            <p id="workspace-header"> Workspace </p>

            <Palindrome />

          </div>
        )
      case 'ReverseArray.js':
        return (
          <div id="workspace-component">
            <p id="workspace-header"> Workspace </p>

            <ReverseArray />

          </div>
        )
    }
  }
}

export default Workspace;