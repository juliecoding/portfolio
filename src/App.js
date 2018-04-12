import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
              <header className="App-header">
                <div>
                  <h3 style={{position: 'absolute', top: '5%'}}>Apps</h3>
                  <h3>Demos</h3>
                </div>
                <h1 className="App-title">Julie Kohler</h1>
                <h2 className="App-subtitle">Web Developer</h2>
                <div  style={{position: 'absolute', bottom: '5%'}}>
                  <h3>Design</h3>
                  <h3>About Me</h3>
                </div>
              </header>
            </div>
      );
  }
}

export default App;