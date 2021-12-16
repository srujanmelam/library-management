import { connect } from 'react-redux'
import './css/UserProfile.css';
import user from './images/user.png';
function UserProfile({profile}){

    const User = profile.username
    const Admin = profile.isAdmin ? "Admin" : "Student"
    return(
        <div className='m4'>
          <br></br>
          <img className='ip' src={user} alt="avatar"></img>
        <div className='main4'><h3>Name: {User}</h3>
          <h3>Category: {Admin}</h3><br></br></div>
          
        </div>
      );

}

const mapStateToProps=(state)=>{
    return{
        profile : state.loginReducer.user
    }
  }

export default connect(mapStateToProps)(UserProfile);
