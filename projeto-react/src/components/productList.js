import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from "react-router-dom";
import '../App.css';

const ProductList = (props) => {
    return (
        <div className="padd-top">
            <div className="container">
                <ListGroup tag={Link} to={"/product-details/" + props.id} >
                    <ListGroupItem className="notAnchor">
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