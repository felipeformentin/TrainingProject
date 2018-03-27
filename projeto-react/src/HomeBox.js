import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import './App.css';

import ProductCard from './components/productCard';

export default class HomeBox extends Component {

  componentWillMount() {
    this.setState({ products: this.getFeaturedProducts() });
  }

  //Later this will feature an api call, then will be a for each.
  getFeaturedProducts = () => {
    let cols = [];
    for (let i = 0; i < 4; i++) {
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
