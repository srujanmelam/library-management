import { connect } from 'react-redux'

function UserProfile({profile}){
    return(
        <div>
          {profile.username}
          {profile.isAdmin} 
        </div>
      );

}

const mapStateToProps=(state)=>{
    return{
        profile : state.loginReducer.user
    }
  }

export default connect(mapStateToProps)(UserProfile);
