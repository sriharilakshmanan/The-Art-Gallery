import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Input, FormGroup, Button } from 'reactstrap';
class PostPicture extends Component {
  state = {
    imageObject: { id: '', imageSource: '', imageCaption: '' }
  };

  postDataHandler = () => {
    axios
      .post('http://localhost:8082/images', this.state.imageObject)
      .then((response) => {
        console.log(response);
        this.props.history.push('/posts');
      });
  };

  onChangeHandler = (event, inputType) => {
    console.log(event);
    let inputImage = { ...this.state.imageObject };
    inputImage[inputType] = event.target.value;
    if (inputType === 'imageCaption') {
      inputImage['id'] = event.target.value.split(' ').join('').toLowerCase();
    }
    this.setState({ imageObject: inputImage });
    console.log(inputImage);
  };

  render() {
    console.log(this.props);
    return (
      <Card
        style={{ margin: '50px auto auto auto', width: '50%', padding: '20px' }}
      >
        {' '}
        <FormGroup>
          <Input
            type='text'
            placeholder='Image Caption'
            name='imageCaption'
            onChange={(event) => this.onChangeHandler(event, 'imageCaption')}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='url'
            placeholder='Image Source URL'
            name='imageSource'
            onChange={(event) => this.onChangeHandler(event, 'imageSource')}
          />
        </FormGroup>
        <FormGroup>
          <Button color='primary' block onClick={this.postDataHandler}>
            Submit
          </Button>
        </FormGroup>
        <Link to='/'>Go Back</Link>
      </Card>
    );
  }
}

export default PostPicture;
