let initialState = {
  loginSuccess: false,
  user: {},
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "loginSuccess":
      return {
        ...state,
        loginSuccess: true,
        user: action.payload
      };
    case "loginFail":
      return {
        ...state,
        loginSuccess: false,
      };
    default:
      return state;
  }
}

export default LoginReducer;
