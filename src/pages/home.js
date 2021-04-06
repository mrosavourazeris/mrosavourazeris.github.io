import React from 'react'

const Home = () => (
  <div style={{textAlign: "center"}} className="container ">
    <section id="" className="mb-5">
      <div className="card bg-light mb-3 ml-5 mr-5">
        <div className="card-header bg-dark text-light">
          <h1>About Me</h1>
        </div>
        <div className="card-body ">
          <img id="mypic" className="img-fluid mb-2 mr-3 " src={"../../Assets/Images/mypic.jpg"} alt="Picture of Michael Rosa-Vourazeris" />
          <p id="mybio" className="card-text ">
            Hi my name is Michael Rosa-Vourazeris. I'm 27 years old and have worked in logistics for the last 4 years. I signed up for Northwesterns Coding Bootcamp so I could make a transition into a new industry. I believe the coding industry has the most potential for growth and best opportunity for employment.
          </p>
        </div>
      </div>
    </section>

  </div>
)

export default Home 