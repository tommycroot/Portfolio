import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'
import me from '../images/me.jpg'
import background2 from '../images/background2.jpg'
import { useEffect, useState } from 'react'
import ball from '../images/ball.gif'
import music from '../images/music.gif'


const About = () => {
  const images = [me, background2]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [images.length])

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      window.addEventListener('touchstart', function () {
        window.scrollTo(0, 0)
      })
    })
  }, [])

  return (
    <main className="about">
      <img id="sun" src={giphy} className="giphy-img"></img>
      <div className="hero">
        <h1 className='display-3' id="projectTitle">About</h1>
        <img id="me" src={images[index]}></img>
        <div className='links'>
          <p id="aboutlink"><Link to="https://github.com/tommycroot"> Github </Link></p>
          <p id="aboutlink"><Link to="https://github.com/tommycroot"> LinkedIn </Link></p>
        </div>
        <div className='aboutText'>
          <p id="aboutp">Hi, thanks for checking out my portfolio! My name&apos;s Thomas, but you can call me Tom or Tommy. I&apos;ve been learning to code from Southend in Essex, which is an easy commute into London.</p>
          <p id="aboutp">I&apos;m somebody who enjoys learning new skills and finding creative solutions to puzzles in writing and music, so I soon found myself in the midst of a career change after getting hooked on coding during the COVID lockdowns. I then enrolled into General Assembly&apos;s Software Engineering course to further my knowledge at a rapid pace and gain quantifiable experience, as well as network with like minded people also starting out in their coding journeys.</p>
          <p id="aboutp">Now, I&apos;m a former laboratory technician who is driven, passionate and eager to learn as much about software engineering as possible. I&apos;m most looking forward to becoming a member of a collaborative team and learning how to contribute my own imaginative code to projects.</p>
          <h2>Hobbies</h2>
          <img id="music" src={music}></img>
          <img id="ball" src={ball}></img>
          <p id="aboutp">I enjoy a huge variety of music and I love to play classical guitar. I particularly enjoy rearranging popular and old songs into my own arrangements, as well as writing my own original music which is occasionally posted to social media. I love the expression of creativity, the journey of problem solving and mastering a particular musical phrase, as well as the meditative state my mind is in whilst playing. </p>
          <p id="aboutp">I spent much of my life playing sports and I still enjoy working out and being active. Running is something I particularly enjoy because it helps clear my mind and provides me with ample time to reflect. I&apos;m a big fan of football, skateboarding, American sports and I&apos;m also a lifelong wrestling fan.</p>
        </div>
      </div>
      <button id="back-to-top" onClick={() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
      }}>Back To Top</button>
    </main>
  )
}

export default About