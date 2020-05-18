import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';
import Modal from '../../components/UI/Modal/Modal';
import Cart from '../../components/Cart/Cart';
import Auxiliary from '../../hoc/Auxiliary';
import {
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody
} from 'reactstrap';

class Picture extends Component {
  state = {
    imageObject: null,
    showCart: false
  };

  componentDidMount() {
    let url = 'http://localhost:8082/images/' + this.props.match.params.id;
    axios
      .get(url)
      .then((response) => {
        this.setState({ imageObject: response.data });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  toggleCartHandler = () => {
    this.setState((prevState) => ({ showCart: !prevState.showCart }));
  };

  render() {
    let renderedComponent = <Loader />;
    let renderModal = null;
    if (this.state.imageObject) {
      console.log(this.props);
      renderedComponent = (
        <Col sm='12'>
          <Card>
            <CardImg
              src={this.state.imageObject.imageSource}
              alt={this.state.imageObject.imageCaption}
            />
            <CardBody>
              <CardTitle>
                <h4>{this.state.imageObject.imageCaption}</h4>
              </CardTitle>
              <CardSubtitle>
                <h5>Description: </h5>
              </CardSubtitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </CardText>
              <CardText>
                <h4 style={{ display: 'inline-block' }}>Price: 50 USD</h4>
                <Button
                  color='primary'
                  style={{
                    marginLeft: '10px',
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}
                  onClick={this.toggleCartHandler}
                >
                  Add to Cart
                </Button>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
    }
    const title = (
      <h2>
        Order Summary <i className='fas fa-shopping-cart'></i>
      </h2>
    );
    if (this.state.showCart) {
      renderModal = (
        <Modal
          modal={this.state.showCart}
          setModal={this.toggleCartHandler}
          title={title}
        >
          <Cart
            id={this.state.imageObject.id}
            imageSource={this.state.imageObject.imageSource}
            imageCaption={this.state.imageObject.imageCaption}
          />
        </Modal>
      );
    }
    return (
      <Auxiliary>
        {renderedComponent}
        {renderModal}
      </Auxiliary>
    );
  }
}

export default Picture;
