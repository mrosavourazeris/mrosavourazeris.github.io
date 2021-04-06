import React from 'react'

const MyContactInfo = () => (
  <div className="container">
  <div className="card bg-light mb-3 ml-5 mr-5" >
    <div className="card-header bg-dark text-light">
      <h1>My Info</h1>
    </div>
    <div className="card-body">
      <p>Email: </p>
      <p>Phone Number: </p>
      <p>GitHub Profile: <a href={"https://github.com/mrosavourazeris"}>https://github.com/mrosavourazeris</a></p>
      <p>LinkedIn: <a href={"https://www.linkedin.com/in/michaelrosavourazeris/"}>https://www.linkedin.com/in/michaelrosavourazeris/</a></p>
      <p>My Resume: <a href={"https://www.dropbox.com/s/x6mlvy4gu92pipc/Michael%20Rosa-Vourazeris_Resume.DOCX?dl=0"}>Click to view/download</a></p>
    </div>
  </div>
</div>
)

export default MyContactInfo