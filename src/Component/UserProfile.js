import { connect } from 'react-redux'

function UserProfile({profile}){

    const User = profile.username
    const Admin = profile.isAdmin ? "Admin" : "Student"
    return(
        <div>
          <h3>{User}</h3>
          <h4>{Admin}</h4>
        </div>
      );

}

const mapStateToProps=(state)=>{
    return{
        profile : state.loginReducer.user
    }
  }

export default connect(mapStateToProps)(UserProfile);
