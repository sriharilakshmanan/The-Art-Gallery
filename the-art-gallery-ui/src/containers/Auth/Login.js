import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="row">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div style={{ width: "30%", margin: "25px auto" }}>
          <Input type="text" placeholder="Username" name="username" />
          <Input type="password" placeholder="Password" name="password" />
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block">Submit</button>
          </div>
          <div style={{ fontSize: "17px" }}>
            <span>Don't have an account?</span>
            <Link to="/register"> Register</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
