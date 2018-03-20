import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const FoodCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="http://tudoela.com/wp-content/uploads/2016/08/beneficios-da-melancia-810x540.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button>Saiba mais</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodCard;
