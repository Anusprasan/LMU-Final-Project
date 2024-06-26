import React from 'react'
import './Navbaritems.css';
import { Link } from 'react-router-dom';

export default function Navbaritems() {
  return (
    <div>
      <div className="row">
        <div className='nav col py-3 d-flex justify-content-center'>
          <Link to="/">Home</Link>
        </div>
 
        
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Vehicle">Vehicles</Link>
        </div>
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Journey">Journey</Link>    
        </div>
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Maintenance">Maintenance</Link>    
        </div>
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Realtimedata">Real Time Data</Link>    
        </div>
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Reports">Reports</Link> 
        </div>
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Accounts">Accounts</Link>   
        </div>
      </div>
      <div className="row">
        <div className='col py-3 d-flex justify-content-center'>
          <Link to="/Logout">Logout</Link> 
        </div>
      </div>
      
     
    </div>
  )
}
