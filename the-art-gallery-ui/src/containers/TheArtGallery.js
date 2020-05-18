import React, { Component } from 'react';
import PictureGrid from './PictureGrid/PictureGrid';
import LandingPage from '../components/LandingPage/LandingPage';
import NavBar from '../components/NavBar/NavBar';
import Auxiliary from '../hoc/Auxiliary';

import PostPicture from './PostPicture/PostPicture';
import { Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Picture from './Picture/Picture';
import { Container } from 'reactstrap';

class TheArtGallery extends Component {
  render() {
    console.log("Rendering '/'");
    return (
      <Auxiliary>
        <NavBar />
        <Container>
          <Route path='/' exact component={LandingPage} />
          <Route path='/posts' exact component={PictureGrid} />
          <Route path='/new-post' exact component={PostPicture} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/posts/:id' exact component={Picture} />
        </Container>
      </Auxiliary>
    );
  }
}

export default TheArtGallery;
