import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavbarX from './components/navbar';
import HomeBox from './HomeBox';
import ProductListBox from './ProductListBox';
import ProductDetailsBox from './ProductDetailsBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarX />
            <Route exact path="/" component={HomeBox} />
            <Route path="/products/:page?" component={ProductListBox} />
            <Route path="/product-details/:id" component={ProductDetailsBox} />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
