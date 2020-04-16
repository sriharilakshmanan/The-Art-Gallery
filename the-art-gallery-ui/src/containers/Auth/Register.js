import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";

class Register extends Component {
  render() {
    return (
      <div className="row">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <div style={{ width: "30%", margin: "25px auto" }}>
          <Input type="email" placeholder="Email ID" name="emailId" />
          <Input type="text" placeholder="Username" name="username" />
          <Input type="password" placeholder="Password" name="password" />
          <Input type="password" placeholder="Re-Enter Password" />
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
