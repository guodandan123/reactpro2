import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <section>
          {
            this.props.children
          }
          </section>
      </div>
    );
  }
}

export default App;
