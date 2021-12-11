import React from 'react'
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <ul>
        <li>
          <Link to="/">UserSignIn</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      
    )
}

export default NavBar
