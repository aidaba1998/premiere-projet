import React from 'react'

import {FaUserAlt} from 'react-icons/fa'
import {MdLocalActivity} from 'react-icons/md'



export default function navbar() {
  return (
    <div className='' style={{}} >
       
       <nav className="main-header navbar navbar-expand navbar-dark navbar-light fixed-top    "  >
   
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i> 
          
          
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Activity</a>
        <p style={{color:'green',position:'absolute',top:'25%',left:'12%'}}><MdLocalActivity/></p>
       
      </li>
     
    </ul>

   
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
          <i className="fas fa-search "></i>
        </a> 
        
        <div className="navbar-search-block">
          <form className="">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
              
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search "></i>
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

   
      <li className="nav-item dropdown" style={{position:'absolute',left:'86%',top:'5%'}}>
        <a className="nav-link " data-toggle="dropdown" href="#">
                <h5 style={{paddingTop:'15%'}} ><FaUserAlt/></h5>
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          </div>
      </li>

      <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <span className="mr-2 d-none  text-gray-600 small">Valerie Luna</span>
                <img className="img-profile rounded-circle mt-1" src="https://developpementpersonnel.org/wp-content/uploads/2020/02/dev-800x450.jpg"  alt='dashboard illustration' style={{width:'52%', height:'5vh',paddingTop:'0'}}/>
              </a>
    
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                  <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fa fa-sign-out fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
                
              </div>
          </li>
    </ul>
    
  </nav>
    </div>
  )
}
