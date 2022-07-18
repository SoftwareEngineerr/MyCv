import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row , Col} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search'
import event from './image/event.jpg'
import podcasts from './image/podcasts.png'
import experience from './image/experience.jpg'
import project from './image/project.png'
export const Project = () =>{
    return(
        <div className='Project'>
            <div className='relative'>
                <div className='overlay'>

                </div>
                <div className='wrapper'>
                    <h1 style={{fontSize:'50px' , color:'white'}}>Project Protfolio</h1>
                    <p style={{fontSize:'16px' , color:'#a3a3a3'}}><Link style={{textDecoration:'none', color:'#a3a3a3'}} to='/'>Home / </Link><span style={{color:'white'}}>Project Protfolio</span></p>
                </div>
            </div>
            <Container style={{marginTop:'100px'}}>
                <Row>
                    <Col md={8}>
                        <div className='content'>
                            I am in the software industry since 2002, having experience in the design, development, and analysis of enterprise software products, project management, and public speaking. Handled development, analysis, and implementation of dozens of enterprise software projects for various sectors and businesses.
                            <p style={{marginTop:'20px'}}>These days I am working as a Robotic Process Automation Evangelist, an Intelligent Automation Architect, and as a developer.</p>
                        </div>
                    </Col>
                    <Col className='searchbox' md={4}>
                        <input className='search' type='text' placeholder='Search...' />
                        <div className='searchicondiv'>
                            <SearchIcon />
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:'60px'}}>
                    <Col md={2}>
                        <div className='gallery'>
                            <img style={{width:'100%'}} src={experience} />
                        </div>
                        <div className='gallerycontent'>
                            Experience
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='gallery'>
                            <img style={{width:'100%'}} src={event} />
                        </div>
                        <div className='gallerycontent'>
                            Event Gallery
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='gallery'>
                            <img style={{width:'100%'}} src={podcasts} />
                        </div>
                        <div className='gallerycontent'>
                            Webinars & Podcasts
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='gallery'>
                            <img style={{width:'100%'}} src={project} />
                        </div>
                        <div className='gallerycontent'>
                            Education
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='aboutmenu'>
                            <h2 className='heading'>Recent Posts</h2>
                            <ul className='text12'>
                                <li className='text'>Private Cloud – An Enterprise Need</li>
                                <li className='text'>Comparison of top RPA Players– UiPath Vs Blue Prism</li>
                                <li className='text'>How does HATS engine work?</li>
                                <li className='text'>Modernizing Legacy IBM i Applications</li>
                                <li className='text'>Successful IBM i Modernization</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div>
                            <div  className='aboutmenucol3'>
                                <h2 className='heading'>Recent Comments</h2>
                                <ul className='text12'>
                                    <li className='text'>A WordPress Commenter on Why Outsource IT Services?</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Col md={12}>
                        <div>
                            <div  className='aboutmenucol3'>
                                <h2 className='heading'>Archives</h2>
                                <ul className='text12'>
                                    <li className='text'>April 2019</li>
                                    <li className='text'>February 2019</li>
                                    <li className='text'>April 2015</li>
                                    <li className='text'>July 2014</li>
                                    <li className='text'>April 2014</li>
                                    <li className='text'>July 2013</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Col md={12}>
                        <div>
                            <div  className='aboutmenucol3'>
                                <h2 className='heading'>Categories</h2>
                                <ul className='text12'>
                                    <li className='text'>Application Servers</li>
                                    <li className='text'>Businesss</li>
                                    <li className='text'>Concept</li>
                                    <li className='text'>Enterprise Modernization</li>
                                    <li className='text'>RPA</li>
                                    <li className='text'>Uncategorized</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Col md={12}>
                        <div>
                            <div  className='aboutmenucol3'>
                                <h2 className='heading'>Meta</h2>
                                <ul className='text12'>
                                    <li className='text'>Log in</li>
                                    <li className='text'>Entries feed</li>
                                    <li className='text'>Comments feed</li>
                                    <li className='text'>WordPress.org</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row style={{marginTop:'20px',marginBottom:'20px'}}>
                    <Col md={12}>
                        <hr />
                    </Col>
                </Row>
        </div>
    )
}