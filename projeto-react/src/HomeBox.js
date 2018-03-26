import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import './App.css';

import ProductCard from './components/productCard';

export default class HomeBox extends Component {

  componentWillMount() {
    this.setState({ products: this.getFeaturedProducts() });
  }

  getFeaturedProducts = () => {
    let cols = [];
    for (let i = 0; i < 4; i++) {
      console.log(i);
      cols.push(
        <Col key={i}>
          <ProductCard name="default"
            description="default"
            key="default" />
        </Col>);
    }
    return cols;
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1> Confira nossas maravilhosas opções ! </h1>
          <Jumbotron>
            <Container>
              <Row>
                {this.state.products}
              </Row>
            </Container>
          </Jumbotron>
        </Jumbotron>
      </div>
    );
  }
}
