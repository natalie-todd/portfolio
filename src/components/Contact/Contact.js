import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Front from './components/Front/Front';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
    // state = { jobs: [] };
    render() {
        return (
            <React.Fragment>
            <Front />
            <h1>Test test</h1>
            <Projects />
            <Contact />
            </React.Fragment>
    )
    }
}
export default App;
