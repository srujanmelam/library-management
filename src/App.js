import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from '../src/Component/Signup';
import UserSignIn from './Component/UserSignIn';
import NavBar from './Component/NavBar';
import UserHomePage from './Component/UserHomePage';
import AdminHomePage from './Component/AdminHomePage';
import UserProfile from './Component/UserProfile';
import ShowCart from './Component/ShowCart';
import Orders from './Component/Orders'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/home' element={< UserHomePage />}></Route>
          <Route exact path='/' element={< UserSignIn />}></Route>
          <Route exact path='/profile' element={< UserProfile />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
          <Route exact path='/addbook' element={< AdminHomePage />}></Route>
          <Route exact path='/cart' element={< ShowCart />}></Route>
          <Route exact path='/orders' element={< Orders />}></Route>
        </Routes>  
      </Router>
    </div>
  );
}


export default App;
