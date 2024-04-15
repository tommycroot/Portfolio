import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import hagl from '../images/hagl.gif'
import moms from '../images/moms.gif'
import frogger from '../images/frogger.gif'
import footy from '../images/footy.gif'
import asterix from '../images/asterix.gif'
import encore1 from '../images/encore1.gif'

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


  const [expandedCards, setExpandedCards] = useState({})

  const toggleCardExpansion = (cardTitle) => {
    setExpandedCards((prevExpandedCards) => ({
      ...prevExpandedCards,
      [cardTitle]: !prevExpandedCards[cardTitle],
    }))
  }

  const projects = [
    {
      title: 'Encore',
      subtitle: 'Independent Project',
      image: encore1,
      appLink: 'https://encore-app.com/',
      description: 'A gig database application utilising a Python Django API and Django REST Framework to handle data stored in a PostgreSQL database. The frontend, built with React.js and Bootstrap, consumes this data. Encore is a social media hub intended for users to share attended gigs and upcoming events. Users can engage in community interaction by commenting on each other&aposs gig pages and use the follower system to stay updated on their friends&apos gig activities. Includes API integrations with Last.fm for artist suggestions and Google Places for venue suggestions.',
      readmeLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7171092193913356290/',
    },

    {
      title: 'Encore',
      subtitle: 'Independent Project',
      image: encore1,
      appLink: 'https://encore-app.com/',
      description: 'A gig database application utilising a Python Django API and Django REST Framework to handle data stored in a PostgreSQL database. The frontend, built with React.js and Bootstrap, consumes this data. Encore is a social media hub intended for users to share attended gigs and upcoming events. Users can engage in community interaction by commenting on each other&aposs gig pages and use the follower system to stay updated on their friends&apos gig activities. Includes API integrations with Last.fm for artist suggestions and Google Places for venue suggestions.',
      readmeLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7171092193913356290/',
    }
    // Add more projects following the same structure
  ]

  return (
    <main className='about'>

      <div className="hero">
        <div>
          <h1 className='display-3' id="proTitle">Projects</h1>
        </div>
        <div className='wrap'>
          <div className='projects-scroll-container'>
            <Container id="projects" md={6} sm={6}>
              <Row xs={1} md={2} className='projects-row-wrapper'>
                <div className="scroll-content">
                  {projects.map((project) => (
                    <Col key={project.title}>
                      <Card>
                        <Card.Body>
                          <Card.Title id="cardTitle">{project.title}</Card.Title>
                          <h6 className="card-subtitle mb-2 text-muted">{project.subtitle}</h6>
                          <div className='backImg'>
                            <img id="cardImg" src={project.image}></img>
                          </div>
                          <div className='proLinks'>
                            <p id="aboutlink"><Link to={project.appLink} target="_blank"> App Link</Link></p>
                            {project.readmeLink && <p id="aboutlink"><Link to={project.readmeLink} target="_blank"> README </Link></p>}
                          </div>
                          {/* Render different text based on expansion state */}
                          {expandedCards[project.title] ? (
                            <Card.Text>{project.description}</Card.Text>
                          ) : (
                            <div>
                              <Card.Text>{project.description.substring(0, 100)}</Card.Text>
                              <button onClick={() => toggleCardExpansion(project.title)}>
                                Show More
                              </button>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
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