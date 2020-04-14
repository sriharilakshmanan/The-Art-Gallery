import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
class PostPicture extends Component {
  state = {
    imageObject: { id: "", imageSource: "", imageCaption: "" },
    imagePosted: false
  };

  postDataHandler = () => {
    axios
      .post("http://localhost:8082/images", this.state.imageObject)
      .then((response) => {
        console.log(response);
        this.setState({ imagePosted: true });
      });
  };

  onChangeHandler = (event, inputType) => {
    let inputImage = { ...this.state.imageObject };
    inputImage[inputType] = event.target.value;
    if (inputType === "imageCaption") {
      inputImage["id"] = event.target.value.split(" ").join("").toLowerCase();
    }
    this.setState({ imageObject: inputImage });
    console.log(inputImage);
  };

  render() {
    let redirect = null;
    if (this.state.imagePosted) {
      console.log("Redirecting to '/'");
      redirect = <Redirect to="/" />;
    }
    return (
      <div className="row">
        {redirect}
        <h1 style={{ textAlign: "center" }}>Post a Picture</h1>
        <div style={{ width: "30%", margin: "25px auto" }}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Image Caption"
              name="name"
              onChange={(event) => this.onChangeHandler(event, "imageCaption")}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Image Source URL"
              name="image"
              onChange={(event) => this.onChangeHandler(event, "imageSource")}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={this.postDataHandler}
            >
              Submit
            </button>
          </div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

export default PostPicture;
