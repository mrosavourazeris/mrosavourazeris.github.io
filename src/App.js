import Home from './pages/home'
import NavBar from './components/navBar'
import Contact from './pages/contact'
import MyContactInfo from './pages/my-contact-info'
import Portfolio from './pages/portfolio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/aboutme">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/mycontactinfo">
            <MyContactInfo />
          </Route>
          <Route path="/contactme">
            <Contact />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
