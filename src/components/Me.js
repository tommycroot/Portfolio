import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'
import me2 from '../images/me2.jpg'
import background2 from '../images/background2.jpg'
import nba from '../images/nba.jpg'
import { useEffect, useState } from 'react'
import ball from '../images/ball.gif'
import music from '../images/music.gif'
import wave from '../images/wave.gif'


const About = () => {
  const images = [me2, background2]
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
          <p id="aboutp">Thanks for checking out my portfolio! I&apos;m a laboratory technician turned coder, who is driven, passionate and eager to kickstart a career in software engineering. As someone who&apos;s always been interested in technology and inspired by creativity and purpose, my love of coding stems from the fulfilment of witnessing my creations take shape. Right now, I particularly enjoy designing intuitive and visually appealing interfaces. I also find the process of thinking about what the user would want and what they might like in the future to enhance their experience fascinating. After enrolling into General Assembly&apos;s Software Engineering course to further my knowledge at a rapid pace and gain quantifiable experience, I&apos;m thrilled to be finally seeking my first role in the field. 
          </p>
          <h2 id="hobbies">Music   <img id="music" src={music}></img></h2>
          <p id="aboutp">I&apos;m passionate about music and regularly practice classical guitar. I particularly enjoy reinterpeting songs into my own arrangements and writing my own compositions, which are occasionally posted to social media. I love the expression of creativity, the journey of mastering a particular musical phrase and the problem solving it entails. Some of my favourite artists include The Doors, Bob Dylan, The Clash, Tupac, Johnny Cash and Frank Sinatra. </p>
          <h2 id="hobbies2">Sport<img id="ball" src={ball}></img></h2>
          <p id="aboutp">I&apos;ve spent much of my life playing sports and I still enjoy working out and being active. Running is something I particularly enjoy because it helps clear my mind and provides me with time to reflect. Some of my favourite sports include football, basketball and skateboarding. Although <strong>&quot;technically&quot;</strong> not a sport, I&apos;m also a lifelong wrestling fan.</p>

        </div>
      </div>
      <br></br>
      <img id="wave" src={wave} className={`fade-in ${showImage ? 'show' : ''}`}></img>
      <button id="back-to-top" className={`fade-in ${showImage ? 'show' : ''}`} onClick={() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      }}>Back to Top</button>
      
    </main>
  )
}

export default About