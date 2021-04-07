import React from 'react'
import myPassword from '../images/password.png'

const PortfolioCard = ({ id, name, projectHref, repoHref, image, alt, description }) => (
  <div className="container">
    <section>
      <div id="myCard" className="card bg-light mb-5 ml-5 mr-5">
        <div className="card-header bg-dark text-light" >
          <h1 style={{textAlign: "center"}}>{name}</h1>
        </div>
        <div id="myCardBody" className="card-body">
          <div id="myRow" className="row ">
            <div className="col">
              <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" style={{border: "solid"}} src={image} alt={alt} className="card-img-top"></img>
            </div>
            <div className="col">
              <h2 style={{textDecoration: "underline"}}>Description</h2>
              <p>{description}</p>
              <h2 style={{textDecoration: "underline"}}>Links</h2>
              <p className="myPTag"><a href={projectHref}>Deployed Version</a></p>
              <p><a href={repoHref}>GitHub Repository</a></p>
            </div>
          </div> 
        </div>
      </div>        
    </section>
  </div>
)

export default PortfolioCard