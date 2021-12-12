import { combineReducers } from 'redux';
import LoginReducer from "./loginReducer";
import bookReducer from "./bookReducer"


const rootReducer = combineReducers({loginReducer: LoginReducer, bookReducer: bookReducer});

export default rootReducer;