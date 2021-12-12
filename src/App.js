import './App.css';
import About from '../src/Component/About';
import UserSignIn from './Component/UserSignIn';
import Contact from '../src/Component/Contact';
import NavBar from './Component/NavBar';
import UserHomePage from './Component/UserHomePage';
import AdminHomePage from './Component/AdminHomePage';
import AddBooks from './AddBooks';
import SearchBooks from './SearchBooks';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/SearchBooks' component={SearchBooks}/>
          <Route exact path='/AddBooks' component={AddBooks}/>
          <Route exact path='/AdminHome' component={AdminHomePage}/>
          <Route exact path='/Home' element={< UserHomePage />}></Route>
          <Route exact path='/' element={< UserSignIn />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Switch>  
      </Router>
    </div>
  );
}


export default App;
