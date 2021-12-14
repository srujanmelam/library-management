import store from "./store";
import { Link } from "react-router-dom";

function AfterLogin() {

  const logOut = ()=>{
    store.dispatch({ type: "logOut",});
    console.log("Successfully logged out")
  }

  return (
    <ul>
      <li>
        <Link className="active" to="/home">Home</Link>
      </li>
      <li>
        <Link to="/addbook">Add a Book</Link>
      </li>
      <li className="sideLink">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/" onClick={logOut}>Logout</Link>
        </li>
      </li>
    </ul>
  );
}

export default AfterLogin
