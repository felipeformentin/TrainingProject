import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productList';

export default class CartBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.mountPagination = this.mountPagination.bind(this);
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ products: res.products }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        try {
            const response = await fetch('/cart/list');
            return await response.json();
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    mountPagination = () => {
        let products = [];
        for (let i = 0; i <= 2; i++) {
            products.push(
                <ProductList key={i} id={this.state.products[i]._id}
                    name={this.state.products[i].name}
                    description={this.state.products[i].description} />
            );
        }
        return products;
    };

    render() {
        const products = this.mountPagination();
        return (
            <div>
                {products}
            </div>
        );
    }
}