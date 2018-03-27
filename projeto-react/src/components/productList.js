import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../App.css';

const ProductList = (props) => {
    return (
        <div className="padd-top">
            <div className="container">
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            {props.name}
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            {props.description}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
}

export default ProductList;