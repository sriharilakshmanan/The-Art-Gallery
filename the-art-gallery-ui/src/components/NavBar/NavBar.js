import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          The Art Gallery
        </Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
