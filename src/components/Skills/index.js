import render from 'dom-serializer';
import React from 'react';
import "react-bootstrap";
import stairs from '../../assets/me/stairs.jpeg';

function TechnicalSkills() {

    return (
        <>
        <div className='container border-top'>
            <div className='row my-4 align-items-center'>
                <div className='col-4 skills-photo m-auto d-md-flex'>
                <img src={stairs} alt='Santiago Venegas in a suit walking up the stairs'/>
                </div>
            <div className='col-sm-12 col-md-8 m-auto '>
                <h3 className='text-center skills-title pb-3'>Technical Skills</h3>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <h5 className='text-center skill-name pb-2 custom-border'>CSS:</h5>
                        <ul className='list-unstyled text-left skills-ul'>
                            <li>Fundamentals (classes, variables, DevOps Tools, plug-ins)</li>
                            <li>Media Queries</li>
                            <li>Responsive layouts (breakpoints, grid system, best practices)</li>
                            <li>Bootstrap</li>
                            <li>Sass</li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <h5 className='text-center skill-name pb-2 custom-border'>JavaScript:</h5>
                        <ul className='list-unstyled text-left skills-ul'>
                            <li>Fundamentals (variables, arrays, objects, syntax, ES6)</li>
                            <li>Node.js (packaging, CLI, Express.js)</li>
                            <li>GitHub Interface + repositories</li>
                            <li>React / syntax</li>
                            <li>JQuery / syntax</li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-6 m-auto'>
                    <h5 className='text-center pb-3 skill-name custom-border'>Have Experience with:</h5>
                    <ul className='list-unstyled skills-ul'>
                        <li>VS Code</li>
                            <li>Databases such as GraphQL, MongoDB, MySQL</li>
                            <li>MERN stack development</li>
                            <li>OOP</li>
                            <li>Reading documentation</li>
                            <li>Graphic Design and Figma.com</li>
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