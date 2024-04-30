import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'
import me from '../images/me.jpg'
import background2 from '../images/background2.jpg'
import nba from '../images/nba.jpg'
import { useEffect, useState } from 'react'
import ball from '../images/ball.gif'
import music from '../images/music.gif'
import wave from '../images/wave.gif'


const About = () => {
  const images = [background2, me]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3500)
    return () => clearInterval(intervalId)
  }, [images.length])

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      window.addEventListener('touchstart', function () {
        window.scrollTo(0, 0)
      })
    })
  }, [])

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

  const handleAnimationEnd = () => {
    document.getElementById('me').classList.add('paused')
  }

  return (
    <main className="about">
      {/* <img id="sun" src={giphy} className="giphy-img"></img> */}
      <div className="hero">
        <h1 className='display-3' id="projectTitle">About Me</h1>
        <img id="me" src={images[index]} onAnimationEnd={handleAnimationEnd}></img>
        <div className='links'>
          <p id="aboutlink"><Link to="https://github.com/tommycroot"> GitHub </Link></p>
          <p id="aboutlink"><a href="mailto:croot.thomas@gmail.com">Email</a></p>
          <p id="aboutlink"><Link to="https://github.com/tommycroot"> LinkedIn </Link></p>
        </div>
        <div className='aboutText'>
          <p id="aboutp">Hey! Thanks for checking out my portfolio! I&apos;ve been learning to code from Southend in Essex, which is an easy commute into London. I&apos;m a former laboratory technician turned coder, who is driven, passionate and eager to kickstart a career in software engineering. As someone who&apos;s always been interested in technology and driven by creativity and purpose, my enthusiasm for coding stems from the fulfilment of witnessing my creations take shape. I really enjoy learning new skills and finding creative solutions to problems, so I soon found myself transitioning careers as a result of my growing fascination with coding. After enrolling into General Assembly&apos;s Software Engineering course to further my knowledge at a rapid pace and gain quantifiable experience, I&apos;m thrilled to be finally seeking my first role in the field. 
          </p>
          <h2 id="hobbies">Music   <img id="music" src={music}></img></h2>
          <p id="aboutp">Some of my favourite artists include The Doors, The Clash, Nas, A Tribe Called Quest, Metallica, Bob Dylan, Johnny Cash and Frank Sinatra. I enjoy a huge variety of music and I love to play classical guitar. I particularly enjoy reinterpeting songs into my own arrangements, as well as writing my own original music and occasionally posting it to social media. I love the expression of creativity, the journey of mastering a particular musical phrase, the problem solving it entails and the meditative state my mind is in whilst playing.</p>
          <h2 id="hobbies2">Sport<img id="ball" src={ball}></img></h2>
          <p id="aboutp">I&apos;ve spent much of my life playing sports and I still enjoy working out and being active. Running is something I particularly enjoy because it helps clear my mind and provides me with ample time to reflect. Some of my favourite sports include football, basketball and skateboarding. Although <strong>&quot;technically&quot;</strong> not a sport, I&apos;m also a lifelong wrestling fan.</p>

        </div>
      </div>
      <br></br>
      <img id="wave" src={wave} className={`fade-in ${showImage ? 'show' : ''}`}></img>
      <button id="back-to-top" onClick={() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      }}>Back to Top</button>
      
    </main>
  )
}

export default About