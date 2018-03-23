import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import NavbarX from './components/navbar';
import HomeBox from './HomeBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarX/>
            <Route exact path="/" component={HomeBox} />
            <Route path="/catalogo" component={NavbarX} />
          </div>
        </Router>
      </div>
    );
  }

}



export default App;
