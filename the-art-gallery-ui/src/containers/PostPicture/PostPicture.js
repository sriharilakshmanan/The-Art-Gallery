import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
class PostPicture extends Component {
  state = {
    imageObject: { id: "", imageSource: "", imageCaption: "" }
  };

  postDataHandler = () => {
    axios
      .post("http://localhost:8082/images", this.state.imageObject)
      .then((response) => {
        console.log(response);
        this.props.history.push("/posts");
      });
  };

  onChangeHandler = (event, inputType) => {
    console.log(event);
    let inputImage = { ...this.state.imageObject };
    inputImage[inputType] = event.target.value;
    if (inputType === "imageCaption") {
      inputImage["id"] = event.target.value.split(" ").join("").toLowerCase();
    }
    this.setState({ imageObject: inputImage });
    console.log(inputImage);
  };

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <h1 style={{ textAlign: "center" }}>Post a Picture</h1>
        <div style={{ width: "30%", margin: "25px auto" }}>
          <Input
            type="text"
            placeholder="Image Caption"
            name="imageCaption"
            onChange={(event) => this.onChangeHandler(event, "imageCaption")}
          />
          <Input
            type="url"
            placeholder="Image Source URL"
            name="imageSource"
            onChange={(event) => this.onChangeHandler(event, "imageSource")}
          />
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
