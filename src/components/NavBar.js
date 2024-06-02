
import { Link } from 'react-router-dom'

// React Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'




const NavBar = () => {

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="porfolio-nav" style={{ zIndex: '9999' }} />
        <Navbar.Collapse id="portfolio-nav" className="justify-content-end">
          <Nav className="nav ml-auto">
            <Nav.Link to="/" as={NavLink} className="nav-link" activeClassName="active">Home</Nav.Link>
            <Nav.Link to="skills" as={NavLink} className="nav-li" activeClassName="active">Skills</Nav.Link>
            <Nav.Link to="/projects" as={NavLink} className="nav-link" activeClassName="active">Projects</Nav.Link>
            <Nav.Link to="/me" as={NavLink} className="nav-li" activeClassName="active">Me</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar