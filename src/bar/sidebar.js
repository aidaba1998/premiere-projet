import React from 'react';

import { MdOutlineCreate } from 'react-icons/md';
import { BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {GiNotebook} from 'react-icons/gi';

export default function sidebar () {
  return (
    <div>
    
  <aside  className="main-sidebar sidebar-dark-primary elevation-4 " >
     <nav  className="my-5 fixed-left">
      <div className="container my-5">
    <a className="navbar-brand" href="#" style={{paddingTop:'-30%',top:'2px',position:'absolute',color:'green',fontWeight:'bolder',paddingLeft:'0'}} > <span> < GiNotebook /> </span>NoteBook</a>
  </div>
        <ul  className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={{paddingTop:'20%'}}>
        
              
        <li  className="nav-item bg-white ">
                <a href="./index.html"  className="nav-link  ">
                <i className="fa fa-plus-square" aria-hidden="true"></i>

                </a>
              </li>
              <li  className="nav-item bg-success">
                <a href="./index2.html"  className="nav-link">
                
                  <p>Dashboard </p>
                </a>
              </li>
              <li  className="nav-item bg-danger ">
                <a href="./index3.html"  className="nav-link ">
                <i className="fa fa-map" aria-hidden="true"></i>
                  
                </a>
              </li>
              <li  className="nav-item bg-warning">
                <a href="./index3.html"  className="nav-link">
                <i className="fa fa-user " aria-hidden="true" style={{color:'white'}}></i>
                  
                </a>
              </li>
              <li  className="nav-item bg-pink">
                <a href="./index3.html"  className="nav-link">
                < BsFillFileEarmarkTextFill/>

                  
                </a>
              </li>
              <li  className="nav-item bg-info">
                <a href="./index3.html"  className="nav-link">
                <i className="fa fa-envelope-open" aria-hidden="true"></i>


                  
                </a>
              </li>
              <li  className="nav-item bg-green " >
                <a href="./index3.html"  className="nav-link">
               <p><MdOutlineCreate/></p>




                  
                </a>
              </li>
          </ul>
      </nav>
     
    
   
  </aside>

    </div>
  )
}
