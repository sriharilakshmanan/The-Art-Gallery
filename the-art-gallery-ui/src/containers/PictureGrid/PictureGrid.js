import React, { Component } from 'react';
import PictureThumbnail from '../../components/PictureThumbnail/PictureThumbnail';
import axios from 'axios';
import { Row } from 'reactstrap';

class PictureGrid extends Component {
  state = {
    imageList: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:8082/images')
      .then((response) => {
        this.setState({ imageList: response.data });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let imageList = this.state.imageList.map((imageObject) => {
      //console.log(imageObject);
      return (
        <PictureThumbnail
          key={imageObject.id}
          id={imageObject.id}
          imageSource={imageObject.imageSource}
          imageCaption={imageObject.imageCaption}
        />
      );
    });

    return <Row>{imageList}</Row>;
  }
}

export default PictureGrid;
