import { Link } from "react-router-dom";
import './css/NavBar.css';
function BeforeLogin() {
  return (
    <ul>
     
      <li className="list">
      <li>
        <Link to="/">SignIn</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      </li>
      
    </ul>
  );
}

export default BeforeLogin;
