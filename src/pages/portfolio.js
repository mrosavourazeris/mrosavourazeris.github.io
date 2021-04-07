import React from 'react'
import './style.css'
import myPassword from '../images/password.png'
let spotOne = document.getElementById('spotOne')
let spotTwo = document.getElementById('spotTwo')
let spotThree = document.getElementById('spotThree')
let spotFour = document.getElementById('spotFour')
let spotFive = document.getElementById('spotFive')
let spotSix = document.getElementById('spotSix')
let myRow = document.getElementById('myRow')

const Portfolio = () => (
  <div className="container">
      <section>
        <div id="myCard" className="card bg-light mb-5 ml-5 mr-5">
          <div className="card-header bg-dark text-light" >
            <h1 style={{textAlign: "center"}}>Password-Generator</h1>
          </div>
          <div id="myCardBody" className="card-body">
            <div id="myRow" className="row ">
              <div className="col">
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" style={{border: "solid"}} src={myPassword} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
              <div className="col">
                <h2 style={{textDecoration: "underline"}}>Description</h2>
                <p><a href={"https://github.com/mrosavourazeris/Password-Generator"}>GitHub Repository</a> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h2 style={{textDecoration: "underline"}}>Links</h2>
                <p class="myPTag"><a href="https://mrosavourazeris.github.io/Password-Generator/">Deployed Version</a></p>
                <p><a href="https://github.com/mrosavourazeris/Password-Generator">GitHub Repository</a></p>
              </div>
            </div> 
          </div>
        </div>        
      </section>
    </div>
)

export default Portfolio