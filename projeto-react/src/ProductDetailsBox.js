import React, { Component } from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, Button, Input, Jumbotron, Row, Col } from 'reactstrap';

export default class ProductListBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            quantity: 1,
        };
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ product: res.product }))
            .catch(err => console.log(err));
    }

    incrementItem = () => {
        if (this.state.quantity < 10) this.setState({ quantity: this.state.quantity + 1 });
    }

    decreaseItem = () => {
        if (this.state.quantity > 1) this.setState({ quantity: this.state.quantity - 1 });
    }

    callApi = async () => {
        try {
            const response = await fetch('/products/detail/' + this.props.match.params.id);
            return await response.json();
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{this.state.product.name}</h1>
                </Jumbotron>
                <h1>
                    Descrição: {this.state.product.description}
                </h1>
                <h1>
                    Preço: {this.state.product.price}
                </h1>
                <h1>
                    Quantidade: {this.state.product.quantity}
                </h1>
                <Row>
                    <Col md="12">
                        <Button color="success" size="lg">Buy</Button>
                        <Button color="primary" size="lg">Add to cart</Button>
                    </Col>
                </Row>
                <InputGroup>
                    <Button color="danger" onClick={this.decreaseItem}>-</Button>
                    <h1 className="cartQuantity">{this.state.quantity}</h1>
                    <Button color="success" onClick={this.incrementItem}>+</Button>
                </InputGroup>
            </div>
        );
    }
}