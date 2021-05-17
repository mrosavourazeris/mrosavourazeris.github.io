import React, {useState} from 'react'
import {Document, Page} from 'react-pdf'
import Resume3 from "../images/resume3.png"
import Resume4 from "../images/resume4.png"
import Resume1 from '../images/resume1.png'
import Resume2 from '../images/resume2.png'
import MyResume from '../assets/resume.pdf'

const MyContactInfo = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  } 

  return (
    <div className="container">
      <div className="card bg-light mb-3 ml-5 mr-5" >
        <div className="card-header bg-dark text-light">
          <h1>Resume</h1>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col" style={{textAlign: "center"}}>
                <img  src={Resume3} alt="Picture of resume page 1" />
              </div>
              
              <div className="col" style={{textAlign: "center"}}>
                <img  src={Resume4} alt="Picture of resume page 2" />
              </div>
            </div>
          </div>
          
          {/* <p>Email: </p>
          <p>Phone Number: </p>
          <p>GitHub Profile: <a href={"https://github.com/mrosavourazeris"}>https://github.com/mrosavourazeris</a></p>
          <p>LinkedIn: <a href={"https://www.linkedin.com/in/michaelrosavourazeris/"}>https://www.linkedin.com/in/michaelrosavourazeris/</a></p>
          <p>My Resume: <a href={"https://www.dropbox.com/s/x6mlvy4gu92pipc/Michael%20Rosa-Vourazeris_Resume.DOCX?dl=0"}>Click to view/download</a></p> */}
        </div>
      </div>
    </div>

  )
}

export default MyContactInfo