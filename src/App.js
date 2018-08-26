import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Front from './components/Front/Front';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Front />
            <h1>App Test test</h1>
            <Projects />
            <Contact />
      </div>
    );
  }
}

export default App;
