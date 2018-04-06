import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Link } from "react-router-dom";

export default class CartPopover extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      products: []
    };
    this.mountCart = this.mountCart.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ products: res.product }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    try {
      const response = await fetch('/api/mensagem');
      return await response.json();
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  mountCart = () => {
    let products = [];
    console.log(this.state.products.length);
    // IS THIS IF RIGHT??
    if (this.state.products.length > 2) {
      for (let i = 0; i <= 2; i++) {
        products.push(
          <PopoverBody key={i}>
            {this.state.products[i].name}
            {this.state.products[i].quantity}
          </PopoverBody>
        );
      }
    }
    return products;
  }

  render() {
    const products = this.mountCart();
    return (
      <div>
        <Button color="dark" id="Popover1" onClick={this.toggle}>
          Cart
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Last Added Products</PopoverHeader>
          {products}
          <Button block color="success" tag={Link} to="/cart/"> Check cart </Button>
        </Popover>
      </div>
    );
  }
}