import render from 'dom-serializer';
import React from 'react';
import "react-bootstrap";
import stairs from '../../assets/me/stairs.jpeg';

function TechnicalSkills() {

    return (
        <>
        <div className='container border-top'>
            <div className='row my-4'>
                <div className='col-md-6 col-lg-4 m-auto'>
                    <div className='text-center'>
                <img className='w-50 mh-25' src={stairs} alt='Santiago Venegas in a suit walking up the stairs'/>
                </div>
                    </div>
            <div className='col-sm-12 col-md-12 m-auto col-lg-8'>
                <h3 className='text-center skills-title py-2'>Technical Skills</h3>

                <div className='row'>

                    <div className='col-sm-12 col-md-4'>
                        <h5 className='text-center skill-name pb-2 custom-border'>CSS:</h5>
                        <ul className='list-unstyled text-left skills-ul'>
                            <li>Fundamentals (classes, variables, DevOps Tools, plug-ins)</li>
                            <li>Media Queries</li>
                            <li>Responsive layouts (breakpoints, grid system, best practices)</li>
                            <li>Bootstrap</li>
                            <li>Sass</li>
                        </ul>
                    </div>


                    <div className='col-sm-12 col-md-4'>
                        <h5 className='text-center skill-name pb-2 custom-border'>JavaScript:</h5>
                        <ul className='list-unstyled text-left skills-ul'>
                            <li>Fundamentals (variables, arrays, objects, syntax, ES6)</li>
                            <li>Node.js (packaging, CLI, Express.js)</li>
                            <li>GitHub Interface + repositories</li>
                            <li>React / syntax</li>
                            <li>JQuery / syntax</li>
                        </ul>
                    </div>


                    <div className='col-sm-12 col-md-4'>
                    <h5 className='text-center pb-2 skill-name custom-border'>Experience in:</h5>
                    <ul className='skills-ul list-inline'>
                        <li className='list-inline-item'>VS Code</li>
                        <li className='list-inline-item'>Databases such as GraphQL, MongoDB, MySQL</li>
                        <li className='list-inline-item'>MERN stack development</li>
                        <li className='list-inline-item'>OOP</li>
                        <li className='list-inline-item'>
                            Reading documentation
                        </li>
                        <li className='list-inline-item'>Graphic Design and Figma.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>

    )

}

export default TechnicalSkills;