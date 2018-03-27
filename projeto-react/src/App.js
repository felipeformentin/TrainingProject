import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavbarX from './components/navbar';
import ProductList from './components/productList';
import HomeBox from './HomeBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarX />
            <Route exact path="/" component={HomeBox} />
            <Route path="/products/:page?" component={ProductList} />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
