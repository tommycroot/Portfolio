
import background1 from '../images/background1.jpg'
import dino from '../images/dino.jpg'
import ice3 from '../images/ice3.jpg'
import light from '../images/light.jpg'

import { useEffect, useState } from 'react'
import { DiBootstrap, DiCss3, DiDjango, DiAws, DiGithubBadge, DiHtml5, DiJsBadge, DiMongodb, DiNodejsSmall, DiNpm, DiPostgresql, DiPython, DiReact, DiSass, DiTrello, DiMysql, DiDocker } from 'react-icons/di'
import { SiExpress, SiNestjs, SiTypescript } from 'react-icons/si'
import { GrCircleAlert } from 'react-icons/gr'
import { RiTeamLine } from 'react-icons/ri'
import { AiOutlineComment } from 'react-icons/ai'
import { GiTeamIdea } from 'react-icons/gi'
import { TbWritingSign } from 'react-icons/tb'
import { SiMongoose } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import wave from '../images/wave.gif'




const Skills = () => {
  const [showImage, setShowImage] = useState(false)
  const [showImage2, setShowImage2] = useState(false)
  const [showImage3, setShowImage3] = useState(false)
  const [showImage4, setShowImage4] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowImage(true)
    }, 500)

    const timer2 = setTimeout(() => {
      setShowImage2(true)
    }, 2000)

    const timer3 = setTimeout(() => {
      setShowImage3(true)
    }, 3500)

    const timer4 = setTimeout(() => {
      setShowImage4(true)
    }, 5000)

    // Clear the timers to avoid memory leaks
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

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
    <main className="about">
      <div id="skills">
        <h1 className='display-3' id="projectTitle"> Technical Skills</h1>

        <div className='skillPics'>
          <img id="ice" src={dino} className={`fade-in ${showImage ? 'show' : ''}`}></img>
          <img id="ice" src={background1} className={`fade-in ${showImage2 ? 'show' : ''}`} ></img>
          <img id="ice" src={ice3} className={`fade-in ${showImage3 ? 'show' : ''}`}></img>
          <img id="ice" src={light} className={`fade-in ${showImage4 ? 'show' : ''}`}></img>
        </div>
        <p id='sub2'>Key languages and frameworks that I have been using:</p>
        <Container className='skills-content-container'>
          <Row className='skills-row'>

            <Col className='h3-col'>
              <h3 id="skillH3">Front-end:</h3>
            </Col>
            <Row className='skills-row-wrapper'>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <SiTypescript size='50px'></SiTypescript>
                <p>TypeScript</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiReact size='50px'></DiReact>
                <p>React</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiJsBadge size='50px'></DiJsBadge>
                <p>JavaScript</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiHtml5 size='50px'></DiHtml5>
                <p>HTML</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiCss3 size='50px'></DiCss3>
                <p>CSS</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiSass size='50px'></DiSass>
                <p>Sass</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiBootstrap size='50px'></DiBootstrap>
                <p>Bootstrap</p>
              </Col>

            </Row>

          </Row>
          <Row className='skills-row'>

            <Col className='h3-col'>
              <h3 id="skillH3">Back-end:</h3>
            </Col>

            <Row className='skills-row-wrapper'>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <SiTypescript size='50px'></SiTypescript>
                <p>TypeScript</p>
              </Col>


              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <SiNestjs size='50px'></SiNestjs>
                <p>NestJS</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiPython size='50px'></DiPython>
                <p>Python</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiDjango size='50px'></DiDjango>
                <p>Django</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiNodejsSmall size='50px'></DiNodejsSmall>
                <p>Node.js</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <SiMongoose size='50px'></SiMongoose>
                <p>Mongoose</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <SiExpress size='50px'></SiExpress>
                <p>Express.js</p>
              </Col>


              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiMysql size='50px'></DiMysql>
                <p>MySQL</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiPostgresql size='50px'></DiPostgresql>
                <p>PostgreSQL</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiMongodb size='50px'></DiMongodb>
                <p>MongoDB</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiDocker size='50px'></DiDocker>
                <p>Docker</p>
              </Col>






            </Row>

          </Row>
          <Row className='skills-row'>

            <Col className='h3-col'>
              <h3 id="skillH3">Soft skills:</h3>
            </Col>

            <Row className='skills-row-wrapper'>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiTrello size='50px'></DiTrello>
                <p>Project management</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <GrCircleAlert size='50px'></GrCircleAlert>
                <p>Problem solving</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <RiTeamLine size='50px'></RiTeamLine>
                <p>Leadership</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <AiOutlineComment size='50px'></AiOutlineComment>
                <p>Communication</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <GiTeamIdea size='50px'></GiTeamIdea>
                <p>Collaboration</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <TbWritingSign size='50px'></TbWritingSign>
                <p>Creative writing</p>
              </Col>

            </Row>

          </Row>

          <Row className='skills-row'>

            <Col className='h3-col'>
              <h3 id="skillH3">Levelling up:</h3>
            </Col>

            <Row className='skills-row-wrapper'>



              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <SiNextdotjs size='50px'></SiNextdotjs>
                <p>Next.js</p>
              </Col>

              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <DiAws size='50px'></DiAws>
                <p>AWS</p>
              </Col>




            </Row>

          </Row>
        </Container>

        <p id="skillsP"><span id="skillSpan">Storage:</span> Heroku</p>
        <p id="skillsP"><span id="skillSpan">Version Control:</span> Git/GitHub</p>
        <p id="skillsP"><span id="skillSpan">Security:</span> Bcrypt, JSON Web Token</p>
        <p id="skillsP"><span id="skillSpan">Other:</span> Axios, TablePlus, Netlify, Slack, Trello, Excalidraw, Figma</p>
      </div>
      <img id="wave2" src={wave} className={`fade-in ${showImage ? 'show' : ''}`}></img>
      <button className={`fade-in ${showImage ? 'show' : ''}`} id="back-to-top" onClick={() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      }}>Back to Top</button>
    </main>
  )
}

export default Skills