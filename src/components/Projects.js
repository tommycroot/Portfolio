import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import giphy from '../images/giphy.gif'
// import hagl from '../images/hagl.png'
// import moms from '../images/moms.png'
// import frogger from '../images/frogger.png'
// import footy from '../images/footy.png'

import hagl from '../images/hagl.gif'
import moms from '../images/moms.gif'
import frogger from '../images/frogger.gif'
import footy from '../images/footy.gif'
import asterix from '../images/asterix.gif'

import wave from '../images/wave.gif'


const Projects = () => {

  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      window.addEventListener('touchstart', function () {
        window.scrollTo(0, 0)
      })
    })

    setTimeout(() => {
      setShowImage(true)
    }, 1000)
  }, [])


  return (
    <main className='about'>

      <div className="hero">
        <div>
          {/* <img id="sun2" src={giphy} className="giphy-img"></img> */}
          <h1 className='display-3' id="proTitle">Projects</h1>
          <p id='sub'>Check out my progress!</p>
        </div>
        <div className='wrap'>
          <div className='projects-scroll-container'>
            <Container id="projects" md={6} sm={6}>
              <Row xs={1} md={2} className='projects-row-wrapper'>
                <div className="scroll-content">
                  <Col>

                    <Card >
                      <Card.Body>
                        <Card.Title id="cardTitle">Roman Invaders!</Card.Title>
                        <h6 className="card-subtitle mb-2 text-muted">Independent Project</h6>
                        <div className='backImg'>
                          <img id="cardImg" src={asterix}></img>
                        </div>
                        <div className='proLinks'>
                          <p id="aboutlink"><Link to="https://tommycroot.github.io/Asterix/" target="_blank"> App Link</Link></p>
                          <p id="aboutlink"><Link to="https://github.com/tommycroot/Asterix#readme" target="_blank"> README </Link></p>
                        </div>
                        <Card.Text>This is a grid-based Space Invaders game made using solely HTML, CSS and JavaScript and it served as a fun distraction/side project during the summer to keep my front-end skills sharp whilst I continued development on another full-stack web app. Inspired by the Asterix cartoon, the game challenges players to defend Gaul against those pesky Romans. Added features include cut scenes, three levels to beat and the ability to select different characters.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card >
                      <Card.Body>
                        <Card.Title id="cardTitle">Project 4 - Footy Diary</Card.Title>
                        <h6 className="card-subtitle mb-2 text-muted">General Assembly Project</h6>
                        <div className='backImg'>
                          <img id="cardImg" src={footy}></img>
                        </div>
                        <div className='proLinks'>
                          <p id="aboutlink"><Link to="https://footydiary.herokuapp.com/" target="_blank"> App Link</Link></p>
                          <p id="aboutlink"><Link to="https://github.com/tommycroot/project-4#readme" target="_blank"> README </Link></p>
                        </div>
                        <Card.Text>Footy Diary is a full-stack web application designed for users to log their attended football matches, note accompanying friends, and record match specific details. The app was developed entirely from scratch, utilising a Python Django API and Django REST Framework to serve information from a PostgreSQL database. This data is seamlessly consumed through a front-end crafted with React.js and SASS.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title id="cardTitle">Project 3 - HAGL</Card.Title>
                        <h6 className="card-subtitle mb-2 text-muted">General Assembly Project</h6>
                        <div className='backImg'>
                          <img id="cardImg" src={hagl}></img>
                        </div>
                        <div className='proLinks'>
                          <p id="aboutlink"><Link to="http://haglproject.herokuapp.com/" target="_blank"> App Link</Link></p>
                          <p id="aboutlink"><Link to="https://github.com/tommycroot/project3#readme" target="_blank"> README </Link></p>
                        </div>
                        <Card.Text>Created a comprehensive application from the ground up, implementing full-stack capabilities with CRUD functionality, leveraging the MERN stack (MongoDB, Express.js, React.js, and Node.js). In a group of three, we built an online marketplace that gives users the ability to swap their used items with each other. In our team effort on this project, I contributed across the full stack. My main focus was on the back-end configurations, and I took charge of the front-end forms, handling login and registration pages, alongside the edit page.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>Project 2 - Mom&apos;s Spaghetti</Card.Title>
                        <h6 className="card-subtitle mb-2 text-muted">General Assembly Project</h6>
                        <div className='backImg'>
                          <img id="cardImg" src={moms}></img>
                        </div>
                        <div className='proLinks'>
                          <p id="aboutlink"><Link to="https://momsspaghetti.netlify.app/" target="_blank"> App Link</Link></p>
                          <p id="aboutlink"><Link to="https://github.com/tommycroot/project2#readme" target="_blank"> README </Link></p>
                        </div>
                        <Card.Text>This challenge involved us working in pairs over a day and a half to develop a React App that used an external API. This rhyming dictionary app uses two - it provides an index of rhyming words related to the word the user searches for and it also generates a random word if the user is lacking inspiration. We decided to have fun with our CSS and aesthetic by paying homage to the early days of the internet and the movie 8 Mile.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>Project 1 - Frogger</Card.Title>
                        <h6 className="card-subtitle mb-2 text-muted">General Assembly Project</h6>
                        <div className='backImg'>
                          <img id="cardImg" src={frogger}></img>
                        </div>
                        <div className='proLinks'>
                          <p id="aboutlink"><Link to="https://tommycroot.github.io/Project-1-Frogger/" target="_blank"> App Link</Link></p>
                          <p id="aboutlink"><Link to="https://github.com/tommycroot/Project-1-Frogger#readme" target="_blank"> README</Link></p>
                        </div>
                        <Card.Text>Designed and developed a grid based game with JavaScript, HTML & CSS. I based mine on the arcade game Frogger and styled it with a SpongeBob theme. This was a fun challenge that required a solid understanding of intervals and scope and I learned a lot about implementing objects, functions and methods.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              </Row>

            </Container>

          </div>
        </div>
      </div>
      <img id="wave" src={wave} className={`fade-in ${showImage ? 'show' : ''}`}></img>
      <button id="back-to-top" onClick={() => {
        window.scrollTo(0, document.body.scrollHeight)
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      }}>Back to Top</button>
    </main>
  )
}

export default Projects