
import React from 'react'
import Calen from './calen';

import Navbar from './bar/navbar'
import Sidebar from './bar/sidebar'
import Card from './card'
 
import Graph from './graph'
import Autre from './autre'



export default function App() {
  return (
    <div>
      <Navbar/>
     <Autre/>
      <Card/>
          <Graph/>
          <Calen/>
          <Sidebar/>
         
      
     </div>
  )
}
