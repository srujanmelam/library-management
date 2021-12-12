import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from '../src/Component/Signup';
import UserSignIn from './Component/UserSignIn';
import NavBar from './Component/NavBar';
import UserHomePage from './Component/UserHomePage';
import AdminHomePage from './Component/AdminHomePage';
import AddBooks from './AddBooks';
import SearchBooks from './SearchBooks';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/SearchBooks' component={SearchBooks}/>
          <Route exact path='/AddBooks' component={AddBooks}/>
          <Route exact path='/AdminHome' component={AdminHomePage}/>
          <Route exact path='/Home' element={< UserHomePage />}></Route>
          <Route exact path='/' element={< UserSignIn />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
        </Routes>  
      </Router>
    </div>
  );
}


export default App;
