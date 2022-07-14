import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import side from '../../assets/me/side.jpeg';


function Contact() {
  return (
    <Container id="#contact" className="my-5 border-top">

      <Row className="mt-5">
        <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-auto">
          <Image fluid src={side} />
        </Col>

        <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
         
         <div className="contact-info">

              <h4 className="border-bottom m-auto p-3">Contact Me
              </h4>
         
          <ul className="list-unstyled contact-list pt-3">
            <li>
              <a className="text-decoration-none text-dark" href="https://github.com/santiagov916" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="https://www.linkedin.com/in/santiago-venegas-b36931235/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="https://stackoverflow.com/users/18916266/santiagovenegas" target="_blank" rel="noreferrer">
                Stack Overflow
                </a>
            </li>

          </ul>
          <ul className="contact-list-two list-unstyled d-block">
            <li>santiago1venegas@gmail.com</li>
            <li>9162749681</li>
          </ul>
         </div>


       
        </Col>
    </Row>
      
    </Container>
  );
}

export default Contact;
