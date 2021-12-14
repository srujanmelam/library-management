import React from "react";
import "./css/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <ul>
      <li>
        <Link className="active" to="/home">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/addbook">Add a Book</Link>
      </li>
      <li className="sideLink">
        <li>
          <Link to="/">UserSignIn</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </li>
    </ul>
  );
}

export default NavBar;
