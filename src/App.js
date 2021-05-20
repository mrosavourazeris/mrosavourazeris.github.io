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
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <MyContactInfo />
          </Route>
          <Route path="/aboutme">
            <Home />
          </Route>
          <Route path="/connect">
            <Contact />
          </Route>
          <Route path="/">
            <Portfolio />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
