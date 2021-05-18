import React from 'react'
import MyPic from '../images/mypic.jpg'

const Home = () => (
  <div style={{textAlign: "center", maxWidth: "400px"}} className="container w-100 ">
    <section id="" className="mb-5">
      <div className="card bg-light mb-3 ml-5 mr-5">
        <div className="card-header bg-dark text-light">
          <h1>About Me</h1>
        </div>
        <div className="card-body ">
          <img id="mypic" className="img-fluid mb-2 mr-3 " src={MyPic} alt="Picture of Michael Rosa-Vourazeris" />
          <p id="mybio" className="card-text ">
            Hi my name is Michael Rosa-Vourazeris. I'm 28 years old and have worked in logistics for the last 5 years. I signed up for Northwestern's Coding Bootcamp so I could make a transition into a new industry. I believe the coding industry has the most potential for growth and best opportunity for employment.
          </p>
        </div>
      </div>
    </section>

  </div>
)

export default Home 