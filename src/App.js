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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
