import React from "react";

const PictureThumbnail = (props) => (
  <div className="col-md-4 col-sm-6">
    <div className="thumbnail">
      <img src={props.imageSource} alt={props.imageCaption} />
      <div className="caption">
        <h4>{props.imageCaption}</h4>
      </div>
    </div>
  </div>
);

export default PictureThumbnail;
