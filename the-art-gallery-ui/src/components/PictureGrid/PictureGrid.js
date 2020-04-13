import React from "react";
import PictureThumbnail from "./PictureThumbnail/PictureThumbnail";
import classes from "./PictureGrid.module.css";

const PictureGrid = (props) => {
  let imageList = props.imageList.map((imageObject) => {
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
};

export default PictureGrid;
