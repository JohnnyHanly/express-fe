import React from "react";
import { Switch, Link } from "react-router-dom";
import "./Navbar.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navBarTitle">
          <h1>Movie Site</h1>
        </div>

        <ul className="navLinks">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}
