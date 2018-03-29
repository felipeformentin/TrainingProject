import React, { Component } from 'react';
import './App.css';

export default class ProductListBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ product: res.product }))
            .catch(err => console.log(err));
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
        console.log(this.state.product);
        return (
            <div>
                <h1>
                    {this.state.product.name}
                </h1>
                <h1>
                    Descrição: {this.state.product.description}
                </h1>
                <h1>
                    Preço: {this.state.product.price}
                </h1>
                <h1>
                    Quantidade: {this.state.product.quantity}
                </h1>
            </div>
        );
    }
}