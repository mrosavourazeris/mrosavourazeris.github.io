import React from 'react'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 ">
    <a className="navbar-brand" href="#">Michael Rosa-Vourazeris</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="index.html">About Me</a>
        <a className="nav-link" href="portfolio.html">Portfolio</a>
        <a className="nav-link" href="mycontactinfo.html">My Info</a>
        <a className="nav-link" href="contactme.html">Contact Me <span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
)

export default NavBar