import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'


const About = () => {


  return (
    <main className="about">
      <img id="sun" src={giphy} className="giphy-img"></img>
      <div className="hero">
        <h1 className='display-3' id="projectTitle">About</h1>
        <div className='links'>
          <p id="aboutlink"><Link to="https://github.com/tommycroot"> Github </Link></p>
          <p id="aboutlink"><Link to="https://github.com/tommycroot"> LinkedIn </Link></p>
        </div>
        <p id="aboutp">I&apos;m somebody who enjoys learning new skills and finding creative solutions to puzzles in writing and music, so I soon found myself in the midst of a career change after getting hooked on coding during the COVID lockdowns. I then enrolled into General Assembly&apos;s Software Engineering course to further my knowledge at a rapid pace and gain quantifiable experience, as well as network with like minded people also starting out in their coding journeys.</p> 
        <p id="aboutp">Now, I&apos;m a former laboratory technician who is driven, passionate and eager to learn as much about software engineering as possible. I&apos;m most looking forward to becoming a member of a collaborative team and learning how to contribute my own imaginative code to projects. I would love to work as a developer at a company where my educational background in media might come in useful.</p>
      </div>
    </main>
  )
}

export default About