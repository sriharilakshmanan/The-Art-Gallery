import React from "react";
import { Link } from "react-router-dom";

const PictureThumbnail = (props) => (
  <div className="col-md-4 col-sm-6">
    <div className="thumbnail">
      <img src={props.imageSource} alt={props.imageCaption} />
      <div className="caption">
        <h4>{props.imageCaption}</h4>
      </div>
      <Link
        className="btn btn-primary btn-md"
        style={{ marginBottom: "8px" }}
        to={"/posts/" + props.id}
      >
        View Post
      </Link>
    </div>
  </div>
);

export default PictureThumbnail;
