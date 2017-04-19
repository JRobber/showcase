import React, { Component } from 'react';
import './Workspace.css';

// Topics
import Palindrome from '../Topics/Palindrome';
import ReverseArray from '../Topics/ReverseArray';

class Workspace extends Component {
  render() {
    return (
      <div id="workspace-component">
          <p id="workspace-header"> Workspace </p>
          {
            !this.props.selectedTopic
            ? <p> No topic selected </p>
            : null
          }
          {
            this.props.selectedTopic === "Palindrome"
            ? <Palindrome />
            : null
          }
          {
            this.props.selectedTopic === "ReverseArray"
            ? <ReverseArray />
            : null
          }
      </div>
    )
  }
}

export default Workspace;