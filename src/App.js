import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../src/Component/About';
import UserSignIn from './Component/UserSignIn';
import Contact from '../src/Component/Contact';
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
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>  
      </Router>
    </div>
  );
}


export default App;
