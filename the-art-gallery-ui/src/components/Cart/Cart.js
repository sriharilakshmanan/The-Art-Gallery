import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, Button, CardBody } from 'reactstrap';

const Cart = (props) => {
  return (
    <React.Fragment>
      <Card>
        <CardImg src={props.imageSource} alt={props.imageCaption} />
        <CardBody>
          <CardTitle>
            <h5>{props.imageCaption}</h5>
          </CardTitle>
        </CardBody>
      </Card>
      <div style={{ marginTop: '15px' }}>
        <h4>Cart Value: 50 USD</h4>
      </div>
    </React.Fragment>
  );
};

export default Cart;
