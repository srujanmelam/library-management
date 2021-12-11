import logo from './logo.svg';
import './App.css';
import About from '../src/Component/About';
import UserSignIn from './Component/UserSignIn';
import Contact from '../src/Component/Contact';
import NavBar from './Component/NavBar';
import UserHomePage from './Component/UserHomePage';
import AdminHomePage from './Component/AdminHomePage';
import AddBooks from './AddBooks';
import SearchBooks from './SearchBooks';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (
  
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/SearchBooks' element={< SearchBooks />}></Route>
          <Route exact path='/AddBooks' element={< AddBooks />}></Route>
          <Route exact path='/AdminHomePage' element={< AdminHomePage />}></Route>
          <Route exact path='/UserHomePage' element={< UserHomePage />}></Route>
          <Route exact path='/' element={< UserSignIn />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>  
      </Router>
    </div>
  );
}


export default App;
