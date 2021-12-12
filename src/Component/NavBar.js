import React from 'react'
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <ul>
        <li>
          <Link to="/">UserSignIn</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      
    )
}

export default NavBar
