import React, { Component } from "react";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";
import Modal from "../../components/UI/Modal/Modal";
import Cart from "../../components/Cart/Cart";
import Auxiliary from "../../hoc/Auxiliary";

class Picture extends Component {
  state = {
    imageObject: null,
    showCart: false
  };

  componentDidMount() {
    let url = "http://localhost:8082/images/" + this.props.match.params.id;
    axios
      .get(url)
      .then((response) => {
        this.setState({ imageObject: response.data });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  showCartHandler = () => {
    this.setState({ showCart: true });
  };

  hideCartHandler = () => {
    this.setState({ showCart: false });
  };

  render() {
    let renderedComponent = <Loader />;
    let renderModal = null;
    if (this.state.imageObject) {
      console.log(this.props);
      renderedComponent = (
        <div className="col-sm-12">
          <div className="thumbnail">
            <img
              src={this.state.imageObject.imageSource}
              alt={this.state.imageObject.imageCaption}
            />
            <div className="caption">
              <h2>{this.state.imageObject.imageCaption}</h2>
            </div>
            <div className="caption" style={{ fontSize: "14px" }}>
              <h4>Description: </h4>
              <p>
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
              </p>
            </div>
            <div className="caption">
              <h4 style={{ display: "inline-block" }}>Price : $50</h4>
              <button
                className="btn btn-primary btn-md"
                style={{
                  marginLeft: "10px",
                  marginBottom: "8px",
                  display: "inline-block"
                }}
                onClick={this.showCartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.showCart) {
      renderModal = (
        <Modal showModal={this.state.showCart} hideModal={this.hideCartHandler}>
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
