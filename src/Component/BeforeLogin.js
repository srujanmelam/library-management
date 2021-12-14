import { Link } from "react-router-dom";

function BeforeLogin() {
  return (
    <ul>
      <li>
        <Link to="/">SignIn</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  );
}

export default BeforeLogin;
