import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const LandingPage = (props) => (
  <div>
    <Jumbotron style={{ marginTop: '20%' }}>
      <h1 className='display-3'>The Art Gallery</h1>
      <p className='lead'>
        A beautiful collection of artistic pictures from all over the world.
      </p>
      <hr className='my-2' />
      <p className='lead'>
        <Link to='/new-post'>
          <Button color='primary' size='lg'>
            Post a Picture
          </Button>
        </Link>
        <Link to='/posts'>
          <Button color='success' size='lg' style={{ marginLeft: '20px' }}>
            View Posts
          </Button>
        </Link>
      </p>
    </Jumbotron>
  </div>
);

export default LandingPage;
