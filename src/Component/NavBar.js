import "./css/NavBar.css";
import { connect } from "react-redux";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";


function NavBar({login}){

  if(login.loginSuccess){
    return (<AfterLogin user={login.user}/>);
  }
  else{
    return (<BeforeLogin/>)
  }

}

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer
  };
};

export default connect(mapStateToProps)(NavBar);
