import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import FoodListPagination from './foodListPagination';

export default class FoodList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        this.callApi()
            .then(res => this.setState({ products: res.products, count: res.count }))
            .catch(err => console.log(err));
    }


    callApi = async () => {
        const response = await fetch('/api/products/');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        var page = this.props.match.params.page;
        var start = 0
        var limit = 4;
        if (page > 1) {
            start = (page - 1) * 5;
            limit = start + 4
        }
        if (limit > this.state.products.length) {
            limit = this.state.products.length - 1
        }
        var products = [];
        for (var i = start; i <= limit; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            products.push(
                <ListGroupItem key={i}>
                    <ListGroupItemHeading key={i.id}>
                        {this.state.products[i].name}
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        {this.state.products[i].description}
                    </ListGroupItemText>
                </ListGroupItem>);
        }

        return (
            <div className="container">
                <ListGroup>
                    {products}
                </ListGroup>
                <FoodListPagination count={this.state.count} />
            </div>
        );
    }
}
