
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


     function Calen() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='container  mt-5 '>
    <div class="row">
      <div class="col-md-6 ">


                <div className="card " data-sr-id="10"   style={{marginTop:'15%'}}>
                <div className="card-body  " style={{height:'7vh',width:'160%'}}>
                      <div className="d-flex align-items-center  " >
                      <i class="fa fa-female" aria-hidden="true"  style={{color:'gray',marginTop:'-2%'}}></i>
                      <i class="fa fa-certificate" aria-hidden="true" style={{color:'gray',marginTop:'-2%',marginLeft:'3%'}}></i>
                    
                      <p style={{color:'green',paddingLeft:'15%',marginTop:'-1%'}}> Dashboard </p>
                      <i class="fa fa-window-close" aria-hidden="true" style={{color:'gray',marginTop:'-3%',marginLeft:'20%'}}></i>
                    </div>
               </div>
         
               </div>
               <div className="card " data-sr-id="10"   style={{marginTop:'15%'}} >
       <div className="card-body y-5  " style={{height:'7vh',width:'160%'}}>
          <div className="d-flex align-items-center   ">
          <i className="fa fa-female" aria-hidden="true"  style={{color:'gray',marginTop:'-2%'}}></i>
         <i className="fa fa-square " aria-hidden="true" style={{color:'gray',marginTop:'-2%',marginLeft:'5%'}}></i>
       
          <p style={{color:'black',paddingLeft:'15%',marginTop:'-1%'}}> Dashboardtwo </p>
         <i className="fa fa-window-close" aria-hidden="true" style={{color:'gray',marginTop:'-3%',marginLeft:'14%'}}></i>
          </div>
         

        </div>
       </div>
      </div>
      


    
      <div class="col-sm-6 " >
      <div className='calendar-container '   >
               <h5 style={{color:'white'}}>Calendrier</h5>

                    <Calendar   
                      onChange={setDate }
                      value={date}
                       selectRange={true}
                      
                       />
             </div>




      </div>
    </div>

  </div>

    
  //   <div className='container'>
  //   <div className='row'> 
  //   <div className='col-md-4  col-sm-8 '  style={{ marginTop:'10%',marginLeft:'15%'}}> 
  //   <div className=' '  >
  //   <h1>Todos</h1>

  //   <div className="card " data-sr-id="10"   style={{marginTop:'15%',width:'120%',height:'10vh'}}>
  //     <div className="card-body  " style={{height:'7vh',width:'160%'}}>
  //        <div className="d-flex align-items-center  " >
  //        <i class="fa fa-female" aria-hidden="true"  style={{color:'gray',marginTop:'-2%'}}></i>
  //        <i class="fa fa-certificate" aria-hidden="true" style={{color:'gray',marginTop:'-2%',marginLeft:'3%'}}></i>
       
  //        <p style={{color:'green',paddingLeft:'15%',marginTop:'-1%'}}> Dashboard </p>
  //        <i class="fa fa-window-close" aria-hidden="true" style={{color:'gray',marginTop:'-3%',marginLeft:'18%'}}></i>
         



  //        </div>
         
         
  //     </div>
      

  //  </div>
  //  <div className="card " data-sr-id="10"   style={{marginTop:'15%',width:'120%'}} >
  //     <div className="card-body y-5  " style={{height:'7vh',width:'160%'}}>
  //        <div className="d-flex align-items-center   ">
  //        <i class="fa fa-female" aria-hidden="true"  style={{color:'gray',marginTop:'-2%'}}></i>
  //        <i class="fa fa-square " aria-hidden="true" style={{color:'gray',marginTop:'-2%',marginLeft:'5%'}}></i>
       
  //        <p style={{color:'black',paddingLeft:'15%',marginTop:'-1%'}}> Dashboardtwo </p>
  //        <i class="fa fa-window-close" aria-hidden="true" style={{color:'gray',marginTop:'-3%',marginLeft:'17%'}}></i>
         



  //        </div>
         
         
  //     </div>
      

  //  </div>
   
    

  //     </div> 
      

  //   </div>
  //   <div className='col-md-4' style={{ marginTop:'5%',marginLeft:'10%'}} >
   
   
  //       <div className="card" style={{width:'23rem',height:'93%',backgroundColor:'green'}} >
  //             <div className="card-body" style={{paddingTop:'5%'}} >
             
             
  //             <div className='calendar-container '   >
  //             <h5 style={{color:'white'}}>Calendrier</h5>

  //                   <Calendar   
  //                     onChange={setDate }
  //                     value={date}
  //                     selectRange={true}
                      
                      
  //                   />
  //     </div>
               
             

  //           </div>
      
        


     
  //       </div>


  //   </div>
       
  //   </div>
      
      
  //   </div>
   
  );
}

export default Calen;
