import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import logo from './icon1.png';
import icon5 from './icon5.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './icon8.png';
import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.jpg'
import bg4 from './bg4.jpg'
import book from './book.png'
import {FaBars} from "react-icons/fa";
import API from "./API"
import Carousell from './Carousell';


function Course() {

const[isOpen,setIsOpen] = useState(false); 
const toggle = () => setIsOpen(!isOpen);

return (
 <div id="wrapper" className="container">
    <div id="sidebar-wrapper" className="col-3" style={{width:isOpen?"300px":"110px"}}>
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <div className='bars' style={{width:isOpen?"300px":"110px"}}>
                <FaBars onClick={toggle}/>
                <a className='head-1' style={{display:isOpen?"block":"none"}}>
                 Fusion
                </a>
                </div>
                
            </li><br/>
            <li>
                <a href="#"><img src={logo} width="20px"className='dash'/><p  style={{display:isOpen?"block":"none"}}>Dashboard</p></a>
            </li><br/>
            <li>
                <a href="#"><img src={icon5} width="20px" className='dash' /><p className='p-1'  style={{display:isOpen?"block":"none"}}>Dashboard</p></a>
            </li><br/>
            <li>
                <a href="#"><img src={icon7} width="20px" className='dash'/><p  style={{display:isOpen?"block":"none"}}>Dashboard</p></a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2}width="20px" className='dash'/><p  style={{display:isOpen?"block":"none"}}>Dashboard</p></a>
            </li><br/>
            <li>
                <a href="#"><img src={icon4} width="20px" className='dash'/><p  style={{display:isOpen?"block":"none"}}>Dashboard</p></a>
            </li><br/>
            <li>
                <a href="#"><img src={icon6} width="20px" className='dash'/><p  style={{display:isOpen?"block":"none"}}>Dashboard</p></a>
            </li><br/>
            <li>
                <a href="#"><img src={icon8} width="20px" className='dash'/>Logout</a>
            </li><br/>
        </ul>
    </div>
    
       <div className='div-2' style={{marginLeft:isOpen?"30px":"-210px"}}>
        <div>
            <div>
                <h1 className='h1-cors'>Hi Lee</h1>
                <span className='h1-cors-1'>Welcome back,you are doing great</span>
                <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>
            </div>
            <div className='know'>
                <API/>
            </div>
            <div className='car-1'> 
            <Carousell/> 
            </div>
            <h1 className='h1-ass'>Assesments</h1>
          <span className='h2-ass'>Hey here are your assesments to be taken</span>
        </div>
<div className='assess'>
<div className='assess-1'>
<h1>Mathematics</h1>
<h3 className='as-1'>Social Science</h3>
</div>
<br></br>
 <div className='assess-1'>
<h1>Mathematics</h1>
<h3 className='as-1'>Social Science</h3>
</div>
<br></br>
<div className='assess-1'>

                <h1>Mathematics</h1>
                <h3 className='as-1'>Social Science</h3>
            </div>
            <br></br>
        </div>
       </div>

   
</div>

  )
}

export default Course