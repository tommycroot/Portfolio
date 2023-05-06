import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import hagl from '../images/hagl.png'
import giphy from '../images/giphy.gif'
import moms from '../images/moms.png'
import frogger from '../images/frogger.png'


const Projects = () => {
  return (
    <main className='about'>
      <img id="sun" src={giphy} className="giphy-img"></img>
      <div className="hero">
        <h1 className='display-3' id="projectTitle">Projects</h1>
        <div className='wrap'>
          <Container id="projects" md={6} sm={6}>
            <Row xs={1} md={2}>
              <Col>
                <Card >
                  <Card.Body>
                    <Card.Title id="cardTitle">Project 4 - Footy Diary!</Card.Title>
                    <div className='backImg'>
                      <img id="cardImg" src={hagl}></img>
                    </div>
                    <div className='proLinks'>
                      <p id="aboutlink"><Link to="https://momsspaghetti.netlify.app/"> App Link</Link></p>
                      <p id="aboutlink"><Link to="https://github.com/tommycroot/project-3#readme"> README </Link></p>
                    </div>
                    <Card.Text>This was a week-long challenge to create a full-stack MERN app (MongoDB, Express.js, React.js and Node.js) with CRUD functionality. In a group of three, we built an online marketplace that gives users the ability to swap their used items with each other. We all worked full-stack on this project, but I focused on back-end configurations and took responsibility for the forms on the front-end covering the login and registration pages, as well as the edit page.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title id="cardTitle">Project 3 - HAGL</Card.Title>
                    <div className='backImg'>
                      <img id="cardImg" src={hagl}></img>
                    </div>
                    <div className='proLinks'>
                      <p id="aboutlink"><Link to="http://haglproject.herokuapp.com/"> App Link</Link></p>
                      <p id="aboutlink"><Link to="https://github.com/tommycroot/project2#readme"> README </Link></p>
                    </div>
                    <Card.Text>This was a week-long challenge to create a full-stack MERN app (MongoDB, Express.js, React.js and Node.js) with CRUD functionality. In a group of three, we built an online marketplace that gives users the ability to swap their used items with each other. We all worked full-stack on this project, but I focused on back-end configurations and took responsibility for the forms on the front-end covering the login and registration pages, as well as the edit page.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Project 2 - Mom&apos;s Spaghetti</Card.Title>
                    <div className='backImg'>
                      <img id="cardImg" src={moms}></img>
                    </div>
                    <div className='proLinks'>
                      <p id="aboutlink"><Link to="https://momsspaghetti.netlify.app/"> App Link</Link></p>
                      <p id="aboutlink"><Link to="https://github.com/tommycroot/project2#readme"> README </Link></p>
                    </div>
                    <Card.Text>This challenge involved us working in pairs over a day and a half to develop a React App with an external API, using Bulma as our framework. The rhyming dictionary app provides an index of rhyming words related to the word a user searches for, as well as the ability to generate a random word if the user is lacking inspiration. </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Project 1 - Frogger</Card.Title>
                    <div className='backImg'>
                      <img id="cardImg" src={frogger}></img>
                    </div>
                    <div className='proLinks'>
                      <p id="aboutlink"><Link to="https://tommycroot.github.io/Project-1-Frogger/"> App Link</Link></p>
                      <p id="aboutlink"><Link to="https://github.com/tommycroot/Project-1-Frogger#readme"> README</Link></p>
                    </div>
                    <Card.Text>This is a grid based game built with Vanilla JavaScript, HTML & CSS, based on the arcade game Frogger and styled with a SpongeBob theme. I had a week to complete this project and it was a really fun taste of building something from scratch and a great way to reinforce everything learnt over the first 3 weeks of the course.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <button id="back-to-top" onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
    </main>
  )
}

export default Projects