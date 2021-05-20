import React from 'react'
import MyPic from '../images/mypic.jpg'

const Home = () => (
  <div style={{textAlign: "center", maxWidth: "700px"}} className="container w-100 ">
    <section id="" className="mb-5">
      <div className="card bg-light mb-3 ml-5 mr-5">
        <div className="card-header bg-dark text-light">
          <h1>About Me</h1>
        </div>
        <div className="card-body ">
          <img id="mypic" className="img-fluid mb-2 mr-3 " src={MyPic} alt="Picture of Michael Rosa-Vourazeris" />
          <p id="mybio" className="card-text ">
          Hi there, my name is Michael Rosa-Vourazeris. I'm 28 and love learning new skills that challenge me to grow! I took Northwestern's Full Stack Web Development program because I wanted to learn the skill of coding. What specifically drew me to coding? Well, growing up I remember most people hated learning math, the phrase I heard often was, "When am I ever going to use this in the real world?". Those people were right, a majority of the equations and formulas we learned, we'll never use again, especially not in our day to day lives. To be honest, for a long time, I thought the same way. Its not that I hated learning math, the equations or the formulas, but I too thought it was pointless to learn all this information that we wouldn't use in our day to day lives. But then I realized, a few years ago after listening to a podcast, that the reason they taught us all those equations and formulas was to teach us how to problem solve and think critically. I actually enjoyed my math  and physics classes. I enjoyed getting a problem and trying to work out the solution. A few months after listening to that podcast I continued to hear more and more about problem solving and critical thinking. I heard that schools were starting to teach kids coding at a young age for the same reason that they teach math and physics, to solve problems! Another way to learn how to solve problems, that is what lead me to my interest in coding! Not only would learning how to code teach me another way of thinking critically and how to solve new problems, but the world of the future will continue to grow and expand with the help of coding! Taking this course opened my eyes, I had actually no clue how much code goes into all the tools and gadgets we use daily! To think about how much code goes into our phones blew my mind! I've become so interested in learning how to code and want to continue on this journey to learn more!
          </p>
        </div>
      </div>
    </section>

  </div>
)

export default Home 