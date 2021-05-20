import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";



const Contact = () => (
  <div className="container w-100 "style={{ maxWidth: "300px" }}>
    <div className="card bg-light mb-3 ">
      <div className="card-header bg-dark text-light">
        <h1>Connect With Me</h1>
      </div>
      <div className="card-body">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col">
            <a href={"https://github.com/mrosavourazeris"} style={{ color: "black" }}>
              <i className="fa fa-github-square fa-5x" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/michaelrosavourazeris/" style={{ color: "blue" }}>
              <i class="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
            </a>
          </div>
          
        </div>
      </div>
    </div>
</div>
)

export default Contact