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

          <div className='image-side col-lg-5 col-md-12 col-sm-12 p-5 text-center'>
         
            <img className='img-fluid rounded w-50' src={intro} alt='' />
            
          </div>

         
 
            <div className='col-lg-7 col-md-12 col-sm-12 m-auto text-center'>

            <p className='display-6 home-title'>Hello, I'm <span className='text-danger'>Santiago Venegas.</span><br /> I'm a Fullstack Developer.</p>


            <div className="btn-group pb-5" id='resumeBtn' role="group" aria-label="Button Prompts">
                <button type="button" className="btn btn-outline-danger" onClick={scrollToSection}>Portfolio</button>
                <Button variant="" className=" btn-outline-danger" onClick={handleShow}>
                Resume
                </Button>
                <button type="submit" className="btn btn-outline-danger" ><a href="https://github.com/santiagov916/profolio" className="text-danger text-decoration-none resume-btn" target="_blank" rel="noreferrer">
                  Resume Repository</a></button>
         

            </div>
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