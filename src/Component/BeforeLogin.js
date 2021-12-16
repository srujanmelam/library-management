import { Link } from "react-router-dom";
import "./css/NavBar.css";
function BeforeLogin() {
  return (
    <ul>
        <li className="list">
          <Link to="/">SignIn</Link>
        </li>
        <li className="list">
          <Link to="/signup">Sign Up</Link>
        </li>
    </ul>
  );
}

export default BeforeLogin;
