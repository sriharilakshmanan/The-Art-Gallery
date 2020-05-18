import React, { Component } from 'react';
import { FormGroup, Button, Card, Input } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <Card
        style={{ margin: '50px auto auto auto', width: '40%', padding: '20px' }}
      >
        <FormGroup>
          <Input type='email' placeholder='Email ID' name='emailId' />
        </FormGroup>
        <FormGroup>
          <Input type='text' placeholder='Username' name='username' />
        </FormGroup>
        <FormGroup>
          <Input type='password' placeholder='Password' name='password' />
        </FormGroup>
        <FormGroup>
          <Input type='password' placeholder='Re-Enter Password' />
        </FormGroup>
        <FormGroup>
          <Button color='primary' block>
            Submit
          </Button>
        </FormGroup>
      </Card>
    );
  }
}

export default Register;
