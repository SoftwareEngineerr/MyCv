import React from 'react'
import asif from './image/asif.png'
import { Container, Row, Col } from 'react-bootstrap'
import { height } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Footer = () => {

    return (
        <div className='Footer'>
            <Container>
                <Row>
                    <Col sm={6} md={3}>
                        <img style={{ width: '100px', marginTop:'40px' }} src={asif} />
                        <p style={{fontSize:'17px', marginTop:'50px', color:'gray' , lineHeight:'2'}}>
                            Hello! I’m Abdul-Sami. Mid Software Consultant & RPA Solution Architect. Experienced with all stages of the development cycle for software projects.
                        </p>
                    </Col>
                    <Col sm={6} md={3}>
                        <h2 className='heading'>Social Media</h2>
                        <div id='sep' className='separator'></div>
                            <p className='hovertext'>Facebook</p>
                            <p className='hovertext'>Linkedin</p>
                            <p className='hovertext'>Instagram</p>
                            <p className='hovertext'>Twitter</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <h2 className='heading'>About Me</h2>
                        <div id='sep' className='separator'></div>
                            <p className='hovertext'>About</p>
                            <p className='hovertext'>Events Gallery</p>
                            <p className='hovertext'>Project Protfolio</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <h2 className='heading'>Contact Me</h2>
                        <div id='sep' className='separator'></div>
                            <p className='hovertext'>mail@asifhussain.com</p>
                            <p className='hovertext'>Asif Hussain, Chicago USA</p>
                    </Col>
                </Row>
            </Container>
            <hr style={{marginTop:'90px', marginBottom:'30px'}}/>
            <Container>
                <Row>
                    <Col md={9}>
                        <div>Copyright © 2022 <span className='me'>Abdul Sami</span>. All Rights Reserved | Myself by <span className='me'>Theme Palace</span></div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <div className='face'>
                                f
                            </div>
                            <div className='insta'>
                                in
                            </div>
                            <div className='in'>
                                <InstagramIcon id='insta' className='instagram' />
                            </div>
                            <div className='twitter'>
                                <TwitterIcon id='twit' className='twit' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}