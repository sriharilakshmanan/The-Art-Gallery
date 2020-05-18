import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const PictureThumbnail = (props) => (
  <Col md='4' sm='6' style={{ marginTop: '20px' }}>
    <Card>
      <CardImg src={props.imageSource} alt={props.imageCaption} />
      <CardBody>
        <CardTitle>{props.imageCaption}</CardTitle>
        <Link to={'/posts/' + props.id}>
          <Button>View Post</Button>
        </Link>
      </CardBody>
    </Card>
  </Col>
);

export default PictureThumbnail;
