import LoginReducer from './reducers/loginReducer'
import {createStore} from 'redux'

const store = createStore(LoginReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store