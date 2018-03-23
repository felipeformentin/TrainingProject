import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class FoodList extends React.Component {

    componentWillMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }


    callApi = async () => {
        const response = await fetch('/api/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        console.log(this.state);
        return (
            <ListGroup>
                <ListGroupItem active>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        );
    }
}
