import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
    <React.Fragment>
      <div>
        <h2>
          Order Summary <i className="fas fa-shopping-cart"></i>
        </h2>
        <div className="thumbnail" style={{ margin: "10px" }}>
          <img src={props.imageSource} alt={props.imageCaption} />
          <div className="caption">
            <h4>{props.imageCaption}</h4>
          </div>
        </div>
        <div style={{ margin: "15px" }}>
          <h4>Cart Value : $50</h4>
        </div>

        <div>
          <Link className="btn btn-success btn-md" to={"/"}>
            Checkout
          </Link>
          <Link
            className="btn btn-danger btn-md"
            style={{
              marginLeft: "20px"
            }}
            to={"/"}
          >
            Cancel
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
