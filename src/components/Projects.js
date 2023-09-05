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
      <img id="sun" src={giphy} className="giphy-img"></img>
      <div className="hero">
        <h1 className='display-3' id="projectTitle">Projects</h1>
        <img id="wave" src={wave} className={`fade-in ${showImage ? 'show' : ''}`}></img>
        <div className='wrap'>
          <Container id="projects" md={6} sm={6}>
            <Row xs={1} md={2}>
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
                    <Card.Text>This was my first project since finishing General Assembly&apos;s Software Engineering course and a great way to sharpen my front-end skills. This is a similar project to Project 1, but involved a higher level of difficulty. Harnessing the power of HTML, CSS and JavaScript I have crafted a classic Space Invaders game with an Asterix theme. Players must navigate through all three levels and face increasingly challenging adversaries.
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
                    <Card.Text>For our final project we were individually tasked with creating a full-stack app with CRUD functionality using a Python Django API with Django REST framework that served data from an SQL database and a front-end built with React.js. This project lasted just over a week and I created an app that allowed users to keep track of all football matches that they have attended, as well as who they went with and the details of the match.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
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
                    <Card.Text>This was a week-long challenge to create a full-stack MERN app (MongoDB, Express.js, React.js and Node.js) with CRUD functionality. In a group of three, we built an online marketplace that gives users the ability to swap their used items with each other. We all worked full-stack on this project, but I focused on back-end configurations and took responsibility for the forms on the front-end covering the login and registration pages, as well as the edit page.</Card.Text>
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
                    <Card.Text>This challenge required us to collaborate in pairs for a day and a half to create a React App integrated with an external API. Our project, Mom&apos;s Spagehtti, is a rhyming dictionary app that incorporates two APIs and is styled with a 90&apos;s aesthetic that pays homage to the iconic 8 Mile meme. The widget goes beyond merely offering an index of rhyming words for user queries; it also provides the creative option to generate a random word, catering to users seeking inspiration.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row xs={1} md={2}>
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
                    <Card.Text>This is a grid based game built with Vanilla JavaScript, HTML & CSS, based on the arcade game Frogger and styled with a SpongeBob theme. I had a week to complete this project and it was a really fun taste of building something from scratch and a great way to reinforce everything learnt over the first 3 weeks of the course.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <button id="back-to-top" onClick={() => {
        window.scrollTo(0, document.body.scrollHeight)
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      }}>Back To Top</button>
    </main>
  )
}

export default Projects