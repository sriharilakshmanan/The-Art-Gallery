import React from "react";

const NavBar = (props) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          The Art Gallery
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Register</a>
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
