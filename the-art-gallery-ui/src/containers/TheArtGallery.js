import React, { Component } from "react";
import PictureGrid from "./PictureGrid/PictureGrid";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Auxiliary from "../hoc/Auxiliary";

import PostPicture from "./PostPicture/PostPicture";
import { Route } from "react-router-dom";

class TheArtGallery extends Component {
  render() {
    console.log("Rendering '/'");
    return (
      <Auxiliary>
        <NavBar />
        <div className="container">
          <Route path="/" exact component={Header} />
          <Route path="/posts" exact component={PictureGrid} />
          <Route path="/new-post" exact component={PostPicture} />
        </div>
      </Auxiliary>
    );
  }
}

export default TheArtGallery;
