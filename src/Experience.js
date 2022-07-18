import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row , Col} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search'
import event from './image/event.jpg'
import podcasts from './image/podcasts.png'
import experience from './image/experience.jpg'
import project from './image/project.png'
export const Experience = () =>{
    return(
        <div className='Experience'>
            <div className='relative'>
                <div className='overlay'>

                </div>
                <div className='wrapper'>
                    <h1 style={{fontSize:'50px' , color:'white'}}>Experience</h1>
                    <p style={{fontSize:'16px' , color:'#a3a3a3'}}><Link style={{textDecoration:'none', color:'#a3a3a3'}} to='/'>Home / </Link><span style={{color:'white'}}>Experience</span></p>
                </div>
            </div>
        </div>
    )
}