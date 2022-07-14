import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar } from 'react-bootstrap';
import { scroller} from 'react-scroll';

function NavSection() {  

  const scrollHome = function() {
    scroller.scrollTo("#home", {
      duration: 200,
      delay:0
    })
  }

  const scrollProject = function() {
    scroller.scrollTo("#projects", {
    duration: 200,
    delay: 0
    })
  }

  const scrollAbout = function() {
    scroller.scrollTo("#about", {
    duration: 200,
    delay: 0
    })
  }

  const scrollContact = function() {
    scroller.scrollTo("#contact", {
    duration: 200,
    delay: 0
    })
  }
  
    return(
    
    <>
      <Navbar bg='light' expand="md" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#home" className='text-danger'>Santiago Venegas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="offcanvasNavbarDropdown">
            <Nav className="offset-md-6 offset-lg-8 offset-xl-9">
              <Nav.Link onClick={scrollHome} className='text-dark text-center nav-focus'>Home</Nav.Link>
              <Nav.Link onClick={scrollAbout} className='text-dark text-center nav-focus'>About</Nav.Link>
              <Nav.Link onClick={scrollProject} className='text-dark text-center nav-focus'>Portfolio</Nav.Link>
              <Nav.Link onClick={scrollContact} className='text-dark text-center nav-focus'>Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

    )
};

export default NavSection;