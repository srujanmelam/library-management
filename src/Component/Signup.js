import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './css/Signup.css';
import user2 from './images/user2.png';
function UserSignIn() {
  const[username1, setUsername]=useState("");
  const[password1, setPassword]=useState("");
  const[isAdmin1, setisAdmin] =useState(false); 
  const history = useNavigate();

	const SignupUser = ()=>{
    const user = {
      "username":username1,
      "password":password1,
      "isAdmin":isAdmin1
    }
    if (username1.length > 0 & password1.length > 0){
      axios.post(`http://localhost:3000/users`,user).then((res)=>{
        console.log("user created successfully")
        history("/")
      }).catch((err)=>{
        console.log(err);
      })
    }
    else{
      if(username1.length === 0)
      {
        console.log("username should not be empty")
      }
      if(password1.length === 0)
      {
        console.log("password should not be empty")
      }
    }
  }

  return (
    <div className="main">
      <div className="split left"></div>
     
      <div class="split right">
      <h1><b>Online-Library-Management</b></h1>
      <div class="centered">
      <img src={user2} alt="Avatar man"></img>
      <h2>SignUp</h2>
      <p><input type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} required />
      <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required />
	    <label>
		    Admin <input name="isAdmin" type="checkbox" checked={isAdmin1} onChange={(e)=>setisAdmin(!isAdmin1)} />
	    </label>
	    <button type="submit" onClick={SignupUser}>Sign Up</button></p>
      <h9>Online-Library-Management all rights reserved &copy; 2022</h9>
      </div>
     
      </div>
     
    </div>
  );
}

export default UserSignIn;

