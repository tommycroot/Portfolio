import giphy from '../images/giphy.gif'
import background1 from '../images/background1.jpg'
import { useEffect, useState } from 'react'



const Skills = () => {
  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false)
    }, 3000)
  
    return () => clearTimeout(timer)
  }, [])

  const handleAnimationEnd = () => {
    document.getElementById('ice').classList.add('paused')
  }



  return (
    <main className="about">
      <img id="sun" src={giphy} className="giphy-img"></img>
      <div id="skills">
        <h1 className='display-3' id="projectTitle">Skills</h1>
        <img
          id="ice"
          className={showImage ? 'fade-in active' : ''}
          src={background1}
          alt="ice"
          onAnimationEnd={handleAnimationEnd}
        ></img>
        <p id="skillsP"><span id="skillSpan">Front End:</span> JavaScript, React.js, CSS, HTML, SASS</p>
        <p id="skillsP"><span id="skillSpan">Back End:</span> Node.js, MongoDb, Mongoose, Axios, Express, Python, Django, PostgreSQL, TablePlus</p>
        <p id="skillsP"><span id="skillSpan">Packages:</span> npm, Pip, Pipenv</p>
        <p id="skillsP"><span id="skillSpan">Storage:</span> Heroku</p>
        <p id="skillsP"><span id="skillSpan">Version Control:</span> Git/GitHub</p>
        <p id="skillsP"><span id="skillSpan">Security:</span> Bcrypt, JSON Web Token</p>
        <p id="skillsP"><span id="skillSpan">Other:</span> Netlify, Slack, Trello, Excalidraw, Figma</p>
        <p id="skillsP"><span id="skillSpan">Soft:</span> Communication, Creative Writing, Team Management, Project Management, Collaboration</p>
      </div>
    </main>
  )
}

export default Skills