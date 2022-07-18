import React from 'react'
import asif1 from './image/asif1.png'
import robot from './image/robot.jpg'
import experience from './image/experience.jpg'
import event from './image/event.jpg'
import podcasts from './image/podcasts.png'
import web from './image/web.png'
import project from './image/project.png'
import business from './image/business.jpg'
import development from './image/development.jpg'
import rivate from './image/private.jpg'
import ibm from './image/ibm.png'
import rpa from './image/rpa.jpg'
import engine from './image/engine.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'
import { Container , Row , Col } from 'react-bootstrap'
export const Home = () => {
    const myfunction = () => {
    }
    return(
        <div className='Home'>
            <div className='fristsection'>
                <Container>
                    <Row>
                        <Col sm={12} md={5}>
                            <h1 className='Name'>Abdul Sammii</h1>
                            <p className='rob'>Robotic Process Automation Architect & </p>
                            <p className='rob'>Software Project Manager.</p>
                            <div className='separator'></div>
                            <input type='button' className='but1' value='ABOUT' />
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='entry-container'>
                                <img  className='me' src={asif1} />
                            </div>
                        </Col>
                    </Row>    
                </Container>
           </div>
           <div className='secondSection' style={{width:'89%'}}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='content'> Software architect, developer, and analyst. With extensive experience in enterprise software development, project management, and public speaking.</div>
                            <div id='separator' className='separator'></div>    
                            <input type='button' className='educationbutton' value='Education & Certificate' />             
                        </Col>
                        <Col md={6}>
                            <img src={robot} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='thirdSection'>
                    <Row>
                        <Col sm={12} md={4}>
                            <p className='heading'>Experience</p>
                            <div onMouseEnter={myfunction()} className='imagehover'>
                                <div className='icon' id='icon'><ArrowRightAltIcon className='rightIcon' /></div>
                                <img className='thirdimage' src={experience} />
                            </div>
                        </Col>
                        <Col sm={0} md={4}>
                            <p className='heading'>Events Gallery</p>
                            <div onMouseEnter={myfunction()}  className='imagehover'>
                                <div className='icon' id='icon'><ArrowRightAltIcon className='rightIcon' /></div>
                                <img className='thirdimage' src={event} />
                            </div>
                        </Col>
                        <Col sm={0} md={4}>
                            <p className='heading'>Webinars & Podcasts</p>
                            <div onMouseEnter={myfunction()} className='imagehover'>
                                <div className='icon' id='icon'><ArrowRightAltIcon className='rightIcon' /></div>
                                <img className='thirdimage' src={podcasts} />
                            </div>
                        </Col>
                    </Row>
            </div>
        <div className='fourSection'>
            <div className='fourSectionUnderSide'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <p className='heading'>Project Portfolio</p>
                            <div id='separator' className='separator'></div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'50px'}}>
                        <Col sm={6} md={3}>
                            <div className='web'>
                                <img className='webicons' src={web} />
                               <p className='imgcontent'> Webinars & Podcasts</p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className='web'>
                                <img className='webicons' src={project} />
                                <p className='imgcontent'>Project Managment</p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className='web'>
                                <img className='webicons' src={business} />
                               <p className='imgcontent'> Business Analysis</p>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className='web'>
                                <img className='webicons' src={development} />
                                <p className='imgcontent'>RPA & other Development</p>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'100px'}}>
                        <Col md={12}>
                            <div className='head'>Recognitions & Certificates</div>
                            <div id='sep' className='separator'></div> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
            <div className='fiveSection'>
                <div className='overlay'>

                </div>
                <div className='wrapper'>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h1 style={{fontSize:'50px' , color:'white'}}>Project Portfolio</h1>
                            <div style={{marginTop:'30px' , marginBottom:'20px'}} className='separator'></div> 
                                <p style={{fontSize:'20px' , lineHeight:'3ch'}}><span style={{color:'white'}}>
                                    Over the past 16+ years, I worked on dozens of enterprise software projects in many different roles. I started my journey as a software engineer and gradually moved towards business...
                                </span></p>
                            <div className='space'></div>
                                <Link to='/Project' className='Project'>PROJECTS</Link>
                            </Col>
                            <Col md={6}>
                                <span className='leftsidetext'>
                                ROBOTIC PROCESS AUTOMATION
                                </span>
                                <span className='percentage'>
                                    90%
                                </span>
                            <div id="myProgress">
                            <div id="myBar"></div>
                            </div>
                            <div className='space'></div>
                                <span className='leftsidetext'>
                                    PROJECT MANAGEMENT
                                </span>
                                <span className='percentage'>
                                    80%
                                </span>
                            <div id="myProgress">
                            <div id="myBar1"></div>
                            </div>

                            <div className='space'></div>
                            <span className='leftsidetext'>
                                    BUSINESS ANALYSIS
                                </span>
                                <span className='percentage'>
                                    75%
                                </span>
                            <div id="myProgress">
                            <div id="myBar2"></div>
                            </div>

                            <div className='space'></div>
                                <span className='leftsidetext'>
                                    SOLUTION DESIGN
                                </span>
                                <span className='percentage'>
                                    80%
                                </span>
                            <div id="myProgress">
                            <div id="myBar2"></div>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='sixSection'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='blogs'>
                                Blogs
                            </div>
                            <div id='sep' className='separator'></div>
                        </Col>
                    </Row>
                    <Row>
                            <Col md={6} lg={6} sm={6} className='blogsimg'>
                                <img className='image' src={rivate} />
                                <div className='content'>
                                    <p className='imageheading'>
                                        Businesss
                                    </p>
                                    <h1 className='imagehead'>
                                        Private Cloud – An Enterprise Need
                                    </h1>
                                    <p className='admin'>
                                        By <span className='underadmin'>adminPosted on April 9, 2019</span>
                                    </p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className='blogsimg'>
                            <div className='content'>
                                    <p className='imageheading'>
                                        Businesss
                                    </p>
                                    <h1 className='imagehead'>
                                        Comparison of top RPA Players– UiPath Vs Blue Prism
                                    </h1>
                                    <p className='admin'>
                                         <span className='underadmin'>By adminPosted on February 25, 2019</span>
                                    </p>
                                </div>
                                <img className='image' src={rpa} />
                            </Col>
                            <Col md={3} sm={6} className='blogsimg'>
                                <img className='image' style={{height:'250px'}} src={engine} />
                                <div className='content'>
                                    <p className='imageheading'>
                                        Concept Enterprise Modernization
                                    </p>
                                    <h1 className='imagehead'>
                                        How does HATS engine work?
                                    </h1>
                                    <p className='admin'>
                                         <span className='underadmin'>By adminPosted on April 9, 2015</span>
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}  sm={6} className='blogsimg'>
                            <div className='content'>
                                    <p style={{marginTop:'60px'}}className='imageheading'>
                                        Enterprise Modernization
                                    </p>
                                    <h1 className='imagehead'>
                                        Modernizing Legacy IBM i Applications
                                    </h1>
                                    <p className='admin'>
                                         <span className='underadmin'>By adminPosted on July 9, 2014</span>
                                    </p>
                                </div>
                            <img className='image' style={{height:'250px'}} src={ibm} />
                            </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}