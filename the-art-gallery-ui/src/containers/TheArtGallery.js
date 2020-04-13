import React, { Component } from "react";
import PictureGrid from "../components/PictureGrid/PictureGrid";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Auxiliary from "../hoc/Auxiliary";
import axios from "axios";
import PostPicture from "./PostPicture/PostPicture";

class TheArtGallery extends Component {
  state = {
    imageList: [],
    showPictureGrid: true,
    showPostPicture: false
  };

  componentDidMount() {
    axios.get("http://localhost:8082/images").then((response) => {
      this.setState({ imageList: response.data });
      console.log(response);
    });
  }

  showPictureGridHandler = () => {
    this.setState({ showPictureGrid: true, showPostPicture: false });
  };

  showPostPictureHandler = () => {
    this.setState({ showPostPicture: true, showPictureGrid: false });
  };
  render() {
    let content;
    if (this.state.showPictureGrid) {
      content = (
        <Auxiliary>
          <Header>
            <h1>The Art Gallery</h1>
            <p>
              A beautiful collection of artistic pictures from all over the
              world.
            </p>
            <p>
              <button
                className="btn btn-primary btn-lg"
                onClick={this.showPostPictureHandler}
              >
                Post a Picture
              </button>
            </p>
          </Header>
          <PictureGrid imageList={this.state.imageList} />
        </Auxiliary>
      );
    }
    if (this.state.showPostPicture) {
      content = (
        <Auxiliary>
          <PostPicture showPictureGrid={this.showPictureGridHandler} />
        </Auxiliary>
      );
    }

    return (
      <Auxiliary>
        <NavBar />
        <div className="container">{content}</div>
      </Auxiliary>
    );
  }
}

export default TheArtGallery;
