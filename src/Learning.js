import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './icon1.png';
import icon5 from './icon5.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './icon8.png';
import './index.css'
import axios from 'axios';
import  { useCallback,useEffect, useState } from 'react'
import Quest from './Quest'

import{BrowserRouter, Route,Routes,Router,Link} from 'react-router-dom';



const token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJRZ3BFVlNzVE9rR0RRamVFNVNLOUZ6dEVHQ254d2tuRyJ9.lA-IzBtRtwONpb5N-hZjnl9nPLjz2kjDRahXAtM8Euc';
const apiurl="https://api.dev.diksha.gov.in/api/content/v1/search";


  axios.interceptors.request.use(
  config => {
    config.headers.authorization =`Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)


function Learning() {

    const [coll,setcoll] = useState([]);
    const[arti,setarti] = useState([])
  useEffect(()=>{
    fetch()
  })
  const fetch = useCallback(async () => {
    try{
     axios.get(`https://api.dev.diksha.gov.in/api/collection/v1/hierarchy/do_2134773237963653121113`).then(res =>{
        setcoll(res.data.result.content.children);
        console.log(res.data.result.content.children);
        
     })
    }catch(err){
      console.log(err.message);
    }
  })

  return (
    <div class='Container'>
        <div class='row'>
            <div class='col-4'>
            <div id="sidebar-wrapper" className="col-3">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a className='head-1'>
                    Fusion
                </a>
            </li><br/>
            <div className='sub-nav'>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash'/>Unit-1</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash' />Unit-2</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash'/>Unit-3</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2}width="20px" className='dash'/>Unit-4</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash'/>Unit-5</a>
            </li><br/>
            </div>
        </ul>
    </div>
    

            </div>
            <div class='col-6'>
            <h1 className='h1-p'>Let's Learn,</h1>
                <div className='div-1'>
                <h2 className='div-1-h'>Documents</h2>

                <div class="cards">
{coll.map(con => {
    return(
   <a href='#'>
  <div class="card c">
 <div class="card-body">
        <div>
            <a href={con.children[0].artifactUrl}>Unit {coll.indexOf(con)+1} Pdf</a>
<br/>
   </div>
   </div>
</div></a>  
    )})
 
}
   </div>
    </div>
                <div className='div-1'>
                <h2 className='div-1-h'>Videos</h2>

                <div class="cards">
                {coll.map(con => {
    return(
   <a href='#'>
  <div class="card c">
 <div class="card-body">
        {/* <iframe  src={con.children[1].artifactUrl}>
</iframe>  */}
<a href={con.children[1].artifactUrl}>Unit {coll.indexOf(con)+1} Video</a>
<br/>
   </div>
   </div>
</a>  
    )})
 
}

   </div>
</div>
           <h2 className='h1-pp'>Assess</h2>     
           <div class='asses'>
           <Quest/>
          
           </div>
           <button class="btn btn-primary h3">Learn More</button> 
            </div>

        </div>

    </div>
  )
}

export default Learning