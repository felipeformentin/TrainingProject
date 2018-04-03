import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Link } from "react-router-dom";

export default class CartPopover extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button color="dark" id="Popover1" onClick={this.toggle}>
          Cart
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Last Added Products</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
          <Button block color="success" tag={Link} to="/cart/"> Check cart </Button>
        </Popover>
      </div>
    );
  }
}