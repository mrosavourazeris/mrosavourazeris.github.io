import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

const NavBar = () => {

  let location = useLocation();

  const checkActive = (match) => {
    const activeLink = location.pathname === match ? "nav-link active" : "nav-link"
    return activeLink
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 ">
      <a className="navbar-brand" href="#" style={{paddingLeft: "20px"}}>Michael Rosa-Vourazeris</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className={checkActive("/")} to="/">About Me</Link>
          <Link className={checkActive("/aboutme")} to="/aboutme">About Me</Link>
          <Link className={checkActive("/portfolio")} to="/portfolio">Portfolio</Link>
          <Link className={checkActive("/mycontactinfo")} to="/mycontactinfo">My Contact Info</Link>
          <Link className={checkActive("/contactme")} to="/contactme" style={{paddingRight: "20px"}}>Contact Me</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar