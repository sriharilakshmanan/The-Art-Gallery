import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="jumbotron" style={{ marginTop: "20%" }}>
    <div className="container">
      <h1>The Art Gallery</h1>
      <p>
        A beautiful collection of artistic pictures from all over the world.
      </p>

      <Link
        to="/new-post"
        className="btn btn-primary btn-lg"
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        Post a Picture
      </Link>

      <Link
        to="/posts"
        className="btn btn-primary btn-lg"
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        View Posts
      </Link>
    </div>
  </header>
);

export default Header;
