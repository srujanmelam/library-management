import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import store from "./store";
import './css/UserSignIn.css';
import user from './images/user.png';
function UserSignIn() {
  const[username1, setUsername]=useState("");
  const[password1, setPassword]=useState("");
  const history = useNavigate();

	const LoginUser = ()=>{
    axios.get(`http://localhost:3000/users?username=${username1}&password=${password1}`).then( res =>{
      if (res.data.length!==0){
        console.log("Login Success")
        store.dispatch({type:"loginSuccess",payload:res.data[0]});   
        history("/Home");
      }  
      else{
        store.dispatch({type:"loginFail"});
        console.log("Invalid Username or Password");
      }
   }).catch((err)=>{
       store.dispatch({type:"loginFail"});
       console.log(err);
   })
  }

  return (
    <div className="main">
      <div className="split left1">
      </div>
      <div className="split right">
        <h1><b>Online-Library-Management</b></h1>
        <div className="centered">
          <img src={user} alt="Avatar man"></img>
          <h2>SignIn</h2>
          <p><input type="text" className="t1" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} required />
            <input type="password" className="t2" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required />
            <button type="submit" className="b1" onClick={LoginUser}>Login</button></p>
            <h6>Online-Library-Management all rights reserved &copy; 2022</h6>
        </div>
      </div>
    </div>    
  );
}

export default UserSignIn;
