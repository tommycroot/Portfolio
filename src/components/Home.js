import home2 from '../images/home2.jpg'
import home1 from '../images/home1.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'
import home5 from '../images/home5.jpg'
import { useEffect, useState } from 'react'
import giphy from '../images/giphy.gif'




const Home = () => {
  const images = [home1, home2, home3, home4, home5]
  const [index, setIndex] = useState(0)
  const [showHeader, setShowHeader] = useState(false)
  const [showSubheader, setShowSubheader] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true)
      setShowSubheader(true)
      setShowDescription(true)
      setShowImage(true)
    }, 1000)
  }, [])

  return (
    <main className="home">
      <div className="hero">
        <img id="sun" src={giphy} className="giphy-img"></img>
        <h1 className={`display-3 fade-in ${showHeader ? 'show' : ''}`}>Thomas Croot</h1>
        <h2 className={`fade-in ${showSubheader ? 'show' : ''}`}>Junior Software Engineer</h2>

        <div className='image-container'>
          <img id="beach" src={images[index]} className={`fade-in ${showImage ? 'show' : ''}`}></img>
        </div>
        <p id="homep" className={`fade-in ${showDescription ? 'show' : ''}`}><span id="spanHome">Coding From</span> Sunny Southend !</p>
      </div>
    </main>
  )
}

export default Home