import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Alert } from 'reactstrap';

import NavHeader from './components/Front/NavHeader';
import Front from './components/Front/Front';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='pug'>
        <NavHeader />
        <div className='jumbo'>
        <Front />
        </div>
        </div>
        <div>
          <Alert color="primary">
            This is a primary alert — check it out!
      </Alert>
        </div>
        <Projects />
        <Contact />
      </div>
    
    );
  }
}

export default App;
