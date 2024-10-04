import React from 'react'
import {useState,useEffect} from 'react';

export default function Header() {
  const [sessionFullName,setSessionFullName] = useState('');

useEffect(()=>{
  setSessionFullName(localStorage.getItem("fullName"));
},[])
  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-between mx-4">
          <h5 className='heading ' >Vehicle Maintenance & Management System</h5>
          <h5>Welcome, {sessionFullName}</h5>
        </div>
      </div>
      
    </div>
  )
}
