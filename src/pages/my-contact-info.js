import React, {useState} from 'react'
import Resume3 from "../images/resume3.png"
import Resume4 from "../images/resume4.png"

const MyContactInfo = () => {


  return (
    <div className="container w-100" style={{ maxWidth: "1000px" }}>
      <div className="card bg-light mb-3 ml-5 mr-5" >
        <div className="card-header bg-dark text-light">
          <h1>Resume</h1>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col" style={{textAlign: "center"}}>
                <img  src={Resume3} alt="Picture of resume page 1" className="img-fluid" style={{maxWidth: "100%", height: "auto"}} />
              </div>
            </div>
            <div className="row">
              <div className="col" style={{textAlign: "center"}}>
                <img  src={Resume4} alt="Picture of resume page 2" className="img-fluid" style={{maxWidth: "100%", height: "auto"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MyContactInfo