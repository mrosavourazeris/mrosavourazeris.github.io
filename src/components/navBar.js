import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

const NavBar = () => {

  let location = useLocation();

  console.log(location.pathname)

  const checkActive = (match) => {
    const activeLink = location.pathname === match ? "nav-link active" : "nav-link"
    console.log(activeLink)
    return activeLink
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 ">
      <a className="navbar-brand" href="#">Michael Rosa-Vourazeris</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className={checkActive("/aboutme")} to="/aboutme">About Me</Link>
          <Link className={checkActive("/portfolio")} to="/portfolio">Portfolio</Link>
          <Link className={checkActive("/mycontactinfo")} to="/mycontactinfo">My Contact Info</Link>
          <Link className={checkActive("/contactme")} to="/contactme">Contact Me</Link>
          {/* <a className="nav-link active" href="index.html">About Me</a>
          <a className="nav-link" href="portfolio.html">Portfolio</a>
          <a className="nav-link" href="mycontactinfo.html">My Info</a>
          <a className="nav-link" href="contactme.html">Contact Me <span class="sr-only">(current)</span></a> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar