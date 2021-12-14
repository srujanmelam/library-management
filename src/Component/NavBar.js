import "./css/NavBar.css";
import { connect } from "react-redux";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";


function NavBar({login}){

  if(login){
    return (<AfterLogin/>);
  }
  else{
    return (<BeforeLogin/>)
  }

}

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.loginSuccess
  };
};

export default connect(mapStateToProps)(NavBar);
