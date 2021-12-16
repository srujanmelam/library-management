import store from "./store";
import { Link } from "react-router-dom";

function AfterLogin({user}) {

  const logOut = ()=>{
    store.dispatch({ type: "logOut",});
    console.log("Successfully logged out")
  }

  const admin = user.isAdmin? <li><Link to="/addbook">Add a Book</Link></li> : <></>

  return (
    <ul>
      <li>
        <Link className="active" to="/home">Home</Link>
      </li>
      {admin}
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
