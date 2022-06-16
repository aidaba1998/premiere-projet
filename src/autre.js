import React from 'react'

 import {AiFillHome} from 'react-icons/ai'






export default function autre () {
  return (
    <div  style={{marginTop:'5%'}} >
       
       <nav className="main-header  navbar-expand  navbar-light navbar-light   " style={{background:'white'}}  >
   
       <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link  pe-3" aria-current="page" href="#"> <span style={{color:'gray'}}><AiFillHome /></span>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">activity</a>
        </li>
    </ul>
  </nav>
    </div>
  )
}
