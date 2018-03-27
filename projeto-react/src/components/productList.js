import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ProductListPagination from './productListPagination';

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        this.getPaginationConfig = this.getPaginationConfig.bind(this);
        this.mountPagination = this.mountPagination.bind(this);
    }

    //  componentWillMount
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ products: res.products, count: res.count }))
            .catch(err => console.log(err));
    }


    callApi = async () => {
        try {
            const response = await fetch('/products/');
            return await response.json();
        } catch (error) {
            console.log('Error: ', error);
        }
        // return fetch('/api/products/')
        // .then(response => response.json())
        // .catch(error => {
        // console.log('TEM UM ERRO BIZARRO AQUI: ', error);
        // throw Error(error);
        // });


        // const response = await fetch('/api/products/');
        // const body = await response.json();
        // if (response.status !== 200) throw Error(body.message);
        // return body;
    };

    //Need a better name.
    getPaginationConfig = (page, limit = 4) => {
        let start = 0
        if (page > 1) {
            start = (page - 1) * 5;
            limit = start + 4;
        }

        if (limit > this.state.products.length) {
            limit = this.state.products.length - 1;
        }

        return {
            start,
            limit
        };
    };

    mountPagination = (start, limit) => {
        let products = [];
        for (let i = start; i <= limit; i++) {
            products.push(
                <ListGroupItem key={i}>
                    <ListGroupItemHeading key={i.id}>
                        {this.state.products[i].name}
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        {this.state.products[i].description}
                    </ListGroupItemText>
                </ListGroupItem>
            );
        }

        return products;
    };

    render() {
        let { start, limit } = this.getPaginationConfig(this.props.match.params.page);
        const products = this.mountPagination(start, limit);
        return (
            <div className="container">
                <ListGroup>
                    {products}
                </ListGroup>
                <ProductListPagination count={this.state.count} />
            </div>
        );
    }
}
