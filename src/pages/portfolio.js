import React from 'react'
import './style.css'
let spotOne = document.getElementById('spotOne')
let spotTwo = document.getElementById('spotTwo')
let spotThree = document.getElementById('spotThree')
let spotFour = document.getElementById('spotFour')
let spotFive = document.getElementById('spotFive')
let spotSix = document.getElementById('spotSix')
let myRow = document.getElementById('myRow')

const Portfolio = () => {

  function portfolioCols (){
    if (window.innerWidth > 1107){
        spotOne.setAttribute('class', 'col-sm-4')
        spotTwo.setAttribute('class', 'col-sm-4')
        spotThree.setAttribute('class', 'col-sm-4')
        spotFour.setAttribute('class', 'col-sm-4')
        spotFive.setAttribute('class', 'col-sm-4')
        spotSix.setAttribute('class', 'col-sm-4')
    }
    
    else if (window.innerWidth < 1107 && window.innerWidth > 695){
        spotOne.setAttribute('class', 'col-sm-6')
        spotTwo.setAttribute('class', 'col-sm-6')
        spotThree.setAttribute('class', 'col-sm-6')
        spotFour.setAttribute('class', 'col-sm-6')
        spotFive.setAttribute('class', 'col-sm-6')
        spotSix.setAttribute('class', 'col-sm-6')
    }

    else if (window.innerWidth < 695){
        spotOne.setAttribute('class', 'col-sm-12')
        spotTwo.setAttribute('class', 'col-sm-12')
        spotThree.setAttribute('class', 'col-sm-12')
        spotFour.setAttribute('class', 'col-sm-12')
        spotFive.setAttribute('class', 'col-sm-12')
        spotSix.setAttribute('class', 'col-sm-12')
    }

}

portfolioCols()

  return (
    <div className="container">
      <section>
        <div id="myCard" className="card bg-light mb-5 ml-5 mr-5">
          <div className="card-header bg-dark text-light">
            <h1>Portfolio</h1>
          </div>
          <div id="myCardBody" className="card-body">
            <div id="myRow" className="row justify-content-center ">
              <div id="spotOne">
                <h3 className="portfolioTitle">Password-Generator</h3>
                <p className="myPTag"><a href={"https://mrosavourazeris.github.io/Password-Generator/"}>Deployed Version</a></p>
                <p><a href={"https://github.com/mrosavourazeris/Password-Generator"}>GitHub Repository</a></p>
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" src={"Assets/Images/password.png"} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
              <div id="spotTwo">
                <h3 className="portfolioTitle">Work-Day-Scheduler</h3>
                <p className="myPTag"><a href={"https://mrosavourazeris.github.io/Password-Generator/"}>Deployed Version</a></p>
                <p><a href={"https://github.com/mrosavourazeris/Password-Generator"}>GitHub Repository</a></p>
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" src={"Assets/Images/myPlanner.png"} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
              <div id="spotThree">
                <h3 className="portfolioTitle">Raging Mongooses</h3>
                <p className="myPTag"><a href={"https://oliviapark113.github.io/project7_group-1/"}>Deployed Version</a></p>
                <p><a href={"https://github.com/Oliviapark113/project7_group-1"}>GitHub Repository</a></p>
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" src={"Assets/Images/project1.png"} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
          </div> 
          <div className="row">
              <div id="spotFour">
                <h3 className="portfolioTitle">Note Taker</h3>
                <p className="myPTag"><a href={"https://young-taiga-81351.herokuapp.com/"}>Deployed Version</a></p>
                <p><a href={"https://github.com/mrosavourazeris/Note-Taker"}>GitHub Repository</a></p>
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" src={"Assets/Images/noteTaker.png"} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
              <div id="spotFive">
                <h3 className="portfolioTitle">Partay Tracker!</h3>
                <p className="myPTag"><a href={"https://hidden-ridge-88260.herokuapp.com/"}>Deployed Version</a></p>
                <p><a href={"https://github.com/mrosavourazeris/partay_tracker"}>GitHub Repository</a></p>
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" src={"Assets/Images/signup.png"} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
              <div id="spotSix">
                <h3 className="portfolioTitle">Empty</h3>
                <p className="myPTag">Deployed Version</p>
                <p>GitHub Repository</p>
                <img className="img-fluid mb-2 mr-3 float-left imageBorder portfolioPics" src={"Assets/Images/blank.png"} alt="Picture of Michael Rosa-Vourazeris" className="card-img-top"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )

}

export default Portfolio