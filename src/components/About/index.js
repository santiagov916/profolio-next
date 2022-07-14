import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import coverPhoto from '../../assets/cover/0.jpg';
import { Image, Row, Col } from 'react-bootstrap';



function About() {
    return(

        <div>
            <div className='container border-top' id="#about">
                <div className='row mt-4'>
                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 m-auto">
                        <div className="row m-auto">

                        <div className="row justify-content-start">
                        <div className="col-12">
                         <h1 className="m-auto">"</h1>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-12">
                            <p className="m-auto text-center">
                            The mission has always been to succeed, defy odds, and conquer mountains: one step at a time. So how do I do that with programming? Now its one bug at a time, a new language implemented, one feature, a vision adopted on screen, a business venture with the perfect website; publish! I sign my name on every piece I touch leaving it better than I found it.
                            </p>
                        </div>
                        </div>
                        
                        <div className="row justify-content-end">
                        <div className="col-1">
                            <h1 className="m-auto">"</h1>
                        </div>

                        </div>

                        </div>
                    </div>

                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 m-auto">
                        <div className="row">
                        <div className="row">
                            <div className="col">
                                <Image
                                fluid
                                src={coverPhoto}
                                alt=''
                                className='rounded p-5'/>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='currently'>
              <h3 className='text-center mb-3'>What are you doing right now <span className='text-danger'>?</span></h3>
              <ul className='text-left w-50 m-auto list-unstyled'>
                <li>
                - The lead developer for a new website for a Church in Sacramento.
                </li>
                <li>
                - Currently focused on front-end development , more clean and concise coding, and creating the best layouts for the client.
                </li>
                <li>
                - Expanding my knowledge on Javascript, CSS, Figma via hands-on coding, courses, projects, tutorials
                </li>
              </ul>
              <p></p>
              <br />

            </div>
                </div>
            </div>
        </div>
    )
}

export default About;