import React, { Component } from 'react';
import './App.css';

// Components
import Header from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
      </div>
    )
  }
}

export default App;
