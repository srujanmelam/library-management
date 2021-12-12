import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import store from "./store";

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
    <div>
      <input type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} required />
      <input type="text" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required />
      <button type="submit" onClick={LoginUser}>Login</button>
    </div>
  );
}

export default UserSignIn;
