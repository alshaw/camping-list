import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function NavBar(props) {
  return <nav>
      <Link className="link" to="/">
        <Icon size="large" name="home"></Icon>
      </Link>
      <Link className="link" to="/about">
        <Icon size="large" name="info circle"></Icon>
      </Link>
    </nav>;
}

export default NavBar;