import React from "react";

const Header = (props) => (
  <header className="jumbotron">
    <div className="container">{props.children}</div>
  </header>
);

export default Header;
