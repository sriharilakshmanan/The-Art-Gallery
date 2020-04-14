import React, { Component } from "react";
import PictureThumbnail from "../../components/PictureThumbnail/PictureThumbnail";
import classes from "./PictureGrid.module.css";
import axios from "axios";

class PictureGrid extends Component {
  state = {
    imageList: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/images")
      .then((response) => {
        this.setState({ imageList: response.data });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let imageList = this.state.imageList.map((imageObject) => {
      return (
        <PictureThumbnail
          key={imageObject.id}
          imageSource={imageObject.imageSource}
          imageCaption={imageObject.imageCaption}
        />
      );
    });

    return (
      <div className={["row", "text-center", classes.PictureGrid].join(" ")}>
        {imageList}
      </div>
    );
  }
}

export default PictureGrid;
