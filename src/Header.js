import React , { useState } from 'react'
import Asif12 from './image/asif.png'
import { Container , Row , Col } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './main.css'
import $ from 'jquery';
export const Header = () => {
    const myFunction = (event) =>{
        if(event == 'About'){
            document.getElementById('About').style.color = 'blue';
        }
        if(event == 'Project'){
            document.getElementById('Project').style.color = 'blue';
    }
        if(event == 'Experience'){
            document.getElementById('Experience').style.color = 'blue';
    }
}
        if($(window).height() >= '712px'){
            document.getElementsByClassName('backTotop').style='margin-top: 700px !important;';
        }
    const getlocation = window.location.href;
    const [sami , setSami ]= useState(getlocation.split('3000/')[1]);
    if(sami == 'About'){
        alert('About');
    }
    if(sami == 'Project'){
        alert('Project');
    }
    if(sami == 'Experience'){
        alert('Experience');
    }
    return(
        <div className='Header'>
            <Container>
                <Row>
                    <Col md={6} sm={2}><img style={{width:'88px', marginBottom:'10px'}} src={Asif12} /></Col>
                    <Col sm={5} md={3} style={{margin:'0px' , padding:'0px'}}>
                        <ul>
                            <li>
                                <Link onClick={myFunction()} to='/About' id='About' className='menu'>About</Link>
                            </li>
                            <li>
                                <Link onClick={myFunction()} to='/Project' id='Project' className='menu'>Project</Link>
                            </li>
                            <li>
                                <Link onClick={myFunction()} to='/Experience' id='Experience' className='menu'>Experience</Link>
                            </li>
                        </ul>
                        </Col>
                        <Col className='icons' sm={5} md={3}>
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
                <div id='backtotop' className='backTotop'>
                    <KeyboardArrowUpIcon className='backTotopicon' />
                </div>        
        </div>
    )
}