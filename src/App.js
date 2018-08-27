import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Alert } from 'reactstrap';

import NavHeader from './components/Front/NavHeader';
import Front from './components/Front/Front';
import Projects from './components/Projects/Projects';
import About from './components/Contact/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='pug'>
          <NavHeader />
          <div className='jumbo'>
            <Front />
          </div>
        </header>
        <div>
          <p>App.js is working</p>
        </div>
        <main>
          <Projects />
        </main>
        <footer>
          <About />
          <div className='bottom'>
            <Contact />
          </div>
        </footer>
      </div>

    );
  }
}

export default App;
