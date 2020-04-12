import React, { Component } from "react";
import PictureGrid from "../components/PictureGrid/PictureGrid";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Auxiliary from "../hoc/Auxiliary";

class TheArtGallery extends Component {
  state = {
    imageList: [
      {
        id: "01",
        src:
          "https://images.unsplash.com/photo-1489041763408-10ac51c35969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        caption: "Salmon Creek"
      },
      {
        id: "02",
        src:
          "https://images.unsplash.com/photo-1497431187953-886f6a75d2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        caption: "Just Fruits"
      },
      {
        id: "03",
        src:
          "https://images.unsplash.com/photo-1528820995593-07129c727b2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        caption: "Mizuho House"
      },
      {
        id: "04",
        src:
          "https://images.unsplash.com/photo-1530251985675-fa6a8ceb0d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        caption: "The Grand Canal"
      }
    ]
  };
  render() {
    return (
      <Auxiliary>
        <NavBar />
        <div className="container">
          <Header>
            <h1>The Art Gallery</h1>
            <p>
              View our hand-picked artistic pictures from all over the world.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="/">
                Post a Picture
              </a>
            </p>
          </Header>
          <PictureGrid imageList={this.state.imageList} />
        </div>
      </Auxiliary>
    );
  }
}

export default TheArtGallery;
