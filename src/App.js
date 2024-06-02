
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Me from './components/Me'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='site-wrapper'>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/me" element={<Me />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
