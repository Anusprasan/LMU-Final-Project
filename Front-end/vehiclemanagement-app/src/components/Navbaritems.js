import React from 'react'
import './Navbaritems.css';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.png';
import vehicle from '../assets/images/vehicle.png';
import journey from '../assets/images/journey.png';
import realtimedata from '../assets/images/realtimedata.png';
import reports from '../assets/images/reports.png';
import accounts from '../assets/images/accounts.png';
import logout from '../assets/images/logout.png';
import service from '../assets/images/service.png';

export default function Navbaritems() {
  return (
    <div>

      {/* Home row */}
      <Link to="/Home" className='text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="Navbaritems row ps-2" >
          <div className='col py-3 ' >
            <img src={home} class="img-fluid p-2" alt="..."/>
              Home
          </div>
        </div>
      </Link>
      
      {/* Vehicles row */}
      <Link to="/Vehicle" className=' text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={vehicle} class="img-fluid p-2 " alt="..."/>
              Vehicles
          </div>
        </div>
      </Link>
      
      {/* Journey row */}
      <Link to="/Journey" className=' text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={journey} class="img-fluid p-2 " alt="..."/>  
              Journey
          </div>
        </div>
      </Link>  
      
      {/* Maintenace row */}
      <Link to="/Maintenance" className='text-decoration-none' style={{color:'#A2A3A3'}} >
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={service} class="img-fluid p-2 " alt="..."/>
              Maintenance
          </div>
        </div>
      </Link>
      
      {/* Real time data row */}
      <Link to="/Realtimedata" className='text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={realtimedata} class="img-fluid p-2 " alt="..."/>
              Real Time Data
          </div>
        </div>
      </Link>
      
      {/* Reports row */}
      <Link to="/Reports" className=' text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={reports} class="img-fluid p-2 " alt="..."/>
              Reports
          </div>
        </div>
      </Link>
      
      {/* Accounts row */}
      <Link to="/Accounts" className=' text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={accounts} class="img-fluid p-2 " alt="..."/>
              Accounts
          </div>
        </div>
      </Link>
      
      {/* Logout row */}
      <Link to="/Logout" className=' text-decoration-none' style={{color:'#A2A3A3'}}>
        <div className="row Navbaritems ps-2">
          <div className='col py-3 '>
            <img src={logout} class="img-fluid p-2 " alt="..."/>
              Logout
          </div>
        </div>
      </Link>

      
    
    </div>
  )
}
