import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'


const Skills = () => {


  return (
    <main className="about">
      <img id="sun" src={giphy} className="giphy-img"></img>
      <div className="hero">
        <h1 className='display-3' id="projectTitle">Skills</h1>
        <p id="skillsP"><span id="skillSpan">Front End:</span> JavaScript, React.js, CSS, HTML, SASS</p>
        <p id="skillsP"><span id="skillSpan">Back End:</span> Node.js, MongoDb, Mongoose, Axios, Express, Python, Django, PostgreSQL, TablePlus</p>
        <p id="skillsP"><span id="skillSpan">Packages:</span> npm, Pip, Pipenv</p>
        <p id="skillsP"><span id="skillSpan">Storage:</span> Heroku</p>
        <p id="skillsP"><span id="skillSpan">Version Control:</span> Git/GitHub</p>
        <p id="skillsP"><span id="skillSpan">Security:</span> Bcrypt, JSON Web Token</p>
        <p id="skillsP"><span id="skillSpan">Other:</span> Slack, Trellov</p>
        <p id="skillsP"><span id="skillSpan">Soft:</span> Communication, Creative Writing, Team Management, Project Management, Collaboration</p>
      </div>
    </main>
  )
}

export default Skills