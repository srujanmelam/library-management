import { connect } from 'react-redux'
import './css/UserProfile.css';

function UserProfile({profile}){

    const User = profile.username
    const Admin = profile.isAdmin ? "Admin" : "Student"
    return(
        <div className='m4'>
          <br></br>
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
