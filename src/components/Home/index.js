import React, { useState } from 'react';
import intro from '../../assets/me/handshake.jpeg';
import download from 'downloadjs';
import main from '../../assets/resume/main.pdf';
import { Modal, Button } from 'react-bootstrap';
import { scroller } from 'react-scroll';


function Home() {
  
  const downloadResumes = function() {

    download(main);
    handleClose()
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollToSection = function() {
    scroller.scrollTo("projects", {
      duration: 200,
      delay: 0,
    });
  };

return (
    <div className='container-fluid mt-5 w-75' id="#home">
        <div className='row justify-content-space-between'>

          <div className='image-side col-lg-5 col-md-12 col-sm-12 p-4 text-center'>
         
            <img className='img-fluid rounded w-50' src={intro} alt='' />
            
          </div>

         
 
            <div className='col-lg-7 col-md-12 col-sm-12 m-auto'>

            <h1 className='home-title text-center'>Hello, I'm <span className='text-danger'>Santiago Venegas.</span><br /> I'm a Fullstack Developer.</h1>

            <div className='home-btn-div text-center'>
            <div className="btn-group pb-2 m-auto" id='resumeBtn' role="group" aria-label="Button Prompts">
                <button type="button" className="btn btn-outline-danger" onClick={scrollToSection}>Portfolio</button>
                <Button variant="" className=" btn-outline-secondary" onClick={handleShow}>
                Resume
                </Button>
                <button type="submit" className="btn btn-outline-dark" ><a href="https://calendly.com/santiagov-" className="text-dark text-decoration-none resume-btn" target="_blank" rel="noreferrer">
                  Let's Talk</a></button>
            </div>
            </div>

            <ul className='list-unstyled home-list m-auto text-center pb-2'>
              <li> <p>3 years of development experience</p></li>
              <li> <p>Over 400 hours of development hours</p></li>
              <li> <p>5000+ lines of code of familiar languages</p></li>
            </ul>

           
            
            
            </div>

            

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Download</Modal.Title>
        </Modal.Header>
      
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={downloadResumes}>
            Download Resume
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>   
  )
};



export default Home;