import Password from '../images/password.png'
import MyPlanner from '../images/myPlanner.png'
import ProjectOne from '../images/project1.png'
import NoteTaker from '../images/noteTaker.png'
import SignUp from '../images/signup.png'
import Workout from '../images/workout.png'
import Employee from '../images/employee.png'
import Power from '../images/powerrx.png'

const PortfolioData = [
  {
    id: 1,
    name: "Password Generator",
    projectHref: "https://mrosavourazeris.github.io/Password-Generator/",
    repoHref: "https://github.com/mrosavourazeris/Password-Generator",
    image: Password,
    alt: "Screen shot of Password Generator",
    description: "This is a web app that allows a user to generate a random password. The app allows the user to pick how long they want their password to be, if they want uppercase letters, lowercase letters, numbers, and/or special characters. Once the user selects an answer for each question, the random password is generated in the center of the app." 
  },
  {
    id: 2,
    name: "Work Day Scheduler",
    projectHref: "https://mrosavourazeris.github.io/Work-Day-Scheduler/",
    repoHref: "https://github.com/mrosavourazeris/Work-Day-Scheduler",
    image: MyPlanner,
    alt: "Screen shot of Work Day Scheduler",
    description: "This app allows the user to add text to the planner in each time slot. Once text has been entered, the user can save the text in the time slot, and it will continue to show up until it is deleted manually or overwritten by other text." 
  },
  // {
  //   id: 3,
  //   name: "Raging Mongooses",
  //   projectHref: "https://oliviapark113.github.io/project7_group-1/",
  //   repoHref: "https://github.com/mrosavourazeris/project7_group-1",
  //   image: ProjectOne,
  //   alt: "Screen shot of Raging Mongooses App",
  //   description: "User searches weather based off city and is given music and movie suggestions to match the mood of current weather result." 
  // },
  {
    id: 4,
    name: "Note Taker",
    projectHref: "https://young-taiga-81351.herokuapp.com/",
    repoHref: "https://github.com/mrosavourazeris/Note-Taker",
    image: NoteTaker,
    alt: "Screen shot of Note Taker App",
    description: "This project was designed to allow a user to take notes, save the notes, and then delete the notes if they want to." 
  },
  {
    id: 5,
    name: "Party Tracker!",
    projectHref: "https://hidden-ridge-88260.herokuapp.com/",
    repoHref: "https://github.com/mrosavourazeris/partay_tracker",
    image: SignUp,
    alt: "Screen shot of Party Tracker App",
    description: "A web application that allows users to create and attend events/partays occurring in their social circle. Users can add important details to their event including a title, summary, date, time, location, and an image. Users of the app can also stay in the loop of all other events/parties being created through emailed notifications." 
  },
  {
    id: 6,
    name: "Workout Tracker",
    projectHref: "https://workout-tracker-mrosavourazeri.herokuapp.com/stats",
    repoHref: "https://github.com/mrosavourazeris/Workout-Tracker",
    image: Workout,
    alt: "Screen shot of Workout Dashboard",
    description: "This app allows the user to track their workouts. The user can add a new workout, either resistance or cardio, and add specific info from that workout. For resistance the user can add additional info like exercise name, weight used, sets completed, reps per set, and duration. For cardio, the user can add the exercise name, distance and duration. When on the main page of the app, the user can see their last workout summary. They can also view the workout dashboard which shows info for the last 7 workouts they performed." 
  },
  {
    id: 7,
    name: "Employee Directory",
    projectHref: "https://mrosavourazeris.github.io/employee-directory/",
    repoHref: "https://github.com/mrosavourazeris/employee-directory",
    image: Employee,
    alt: "Screen shot of Employee Directory",
    description: "This app shows an overview of Employees from the Random User API. This table shows the picture, first name, last name, email, phone number and country of the employee. The app allows the user to search for employees by country, or sort the employees by name (by clicking the first name column)." 
  },
  {
    id: 8,
    name: "PoweRx",
    projectHref: "https://power-rx.herokuapp.com/login",
    repoHref: "https://github.com/sawi4644/PoweRx",
    image: Power,
    alt: "Screen shot of PowerRx Dashboard",
    description: "This is an application made for Power Dental to provide their customers with an easier way to submit product requests online, instead of having to fill out a form with pen and paper. Power Dental is an advanced full-service dental laboratory allows us to provide you with the very best cosmetic dentistry, implant dentistry, and aesthetic restorative dentistry care in the Chicagoland area. The user is able to make an account on this website, create an RX Form, and submit the form to Power Dental. This form allows the user to select from over fourty different styles of dental molds and also select individual teeth. Once the form is submitted, Power Dental will be able to access the form and create the order for the customer." 
  },
]

export default PortfolioData