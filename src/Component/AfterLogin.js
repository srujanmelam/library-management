import store from "./store";
import { Link } from "react-router-dom";

function AfterLogin({ user }) {
  const logOut = () => {
    store.dispatch({ type: "logOut" });
    console.log("Successfully logged out");
  };

  const admin = user.isAdmin ? (
    <li>
      <Link to="/addbook">Add a Book</Link>
    </li>
  ) : (
    <></>
  );
  const stud = user.isAdmin ? (
    <></>
  ) : (
    <li>
      <Link to="/orders">Your Orders</Link>
    </li>
  );

  return (
    <ul>
      <li>
        <Link className="active" to="/home">
          Home
        </Link>
      </li>
      {admin}
      {stud}
      <li className="sideLink">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="sideLink">
        <Link to="/" onClick={logOut}>
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default AfterLogin;
