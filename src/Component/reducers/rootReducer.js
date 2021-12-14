import { combineReducers } from 'redux';
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({loginReducer: LoginReducer});

export default rootReducer;