import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Button, Card, Input } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Card
        style={{ margin: '50px auto auto auto', width: '40%', padding: '20px' }}
      >
        <FormGroup>
          <Input type='text' placeholder='Username' name='username' />
        </FormGroup>
        <FormGroup>
          <Input type='password' placeholder='Password' name='password' />
        </FormGroup>
        <FormGroup>
          <Button color='primary' block>
            Submit
          </Button>
        </FormGroup>
        <div style={{ fontSize: '17px' }}>
          <span>Don't have an account?</span>
          <Link to='/register'> Register</Link>
        </div>
      </Card>
    );
  }
}

export default Login;
